import { useEffect, useRef, useState } from "react";
import type { Gasto } from "../../models/Gastos";
import { obtenerGastos, crearGasto, eliminarGasto } from "../../services/gastosService";
import Modal from "../../components/modal/Modal";
import "./Compras.css";
import GastoCard from "../../components/gastos/gastosCard/GastosCard";
import GastoForm from "../../components/gastos/gastosForm/GastosForm";
import type { Vehiculo } from "../../models/Vehiculos";
import { obtenerVehiculos } from "../../services/vehiculosService";

const Gastos = () => {
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [cargando, setCargando] = useState(true);
  const effectRan = useRef(false); 
  const effectRan2 = useRef(false); 
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);

  useEffect(() => {
    if (!effectRan.current) {
      obtenerGastos()
        .then((res) => setGastos(res.data))
        .catch(console.error)
        .finally(() => setCargando(false));
      effectRan.current = true;
    }
  }, []);

  useEffect(() => {
    if (!effectRan2.current) {
      obtenerVehiculos()
        .then((res) => setVehiculos(res.data))
        .catch(console.error);
      effectRan2.current = true;
    }
  }, []);

  const handleAgregar = async (nuevo: Gasto) => {
    try {
      const res = await crearGasto(nuevo);
      setGastos((prev) => [...(prev ?? []), res.data]);
      setMostrarModal(false);
    } catch (err) {
      alert("Error al crear gasto");
    }
  };

  const handleEliminar = async (id: string) => {
    try {
      await eliminarGasto(id);
      setGastos((prev) => prev.filter((g) => g.id !== id));
    } catch (err) {
      alert("Error al eliminar gasto");
    }
  };

  if (cargando) return <p>Cargando...</p>;

  return (
    <div className="gastos-container">
      <h2>Compras</h2>
      <button onClick={() => setMostrarModal(true)} className="crear-btn">Registrar Compra</button>

      <div className="gasto-card-list">
        {Array.isArray(gastos) && gastos.length > 0 ? (
          gastos.map((gasto) => (
            <GastoCard key={gasto.id} gasto={gasto} onDelete={handleEliminar} vehiculos={vehiculos} />
          ))
        ) : (
          <p>No hay compras registradas.</p>
        )}
      </div>


      <Modal isOpen={mostrarModal} onClose={() => setMostrarModal(false)}>
        <GastoForm onSubmit={handleAgregar} />
      </Modal>
    </div>
  );
};

export default Gastos;
