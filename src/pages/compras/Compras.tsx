import { useEffect, useRef, useState } from "react";
import type { Gasto } from "../../models/Gastos";
import { obtenerGastos, crearGasto, eliminarGasto, actualizarGasto } from "../../services/gastosService";
import Modal from "../../components/modal/Modal";
import "./Compras.css";
import GastoCard from "../../components/gastos/gastosCard/GastosCard";
import GastoForm from "../../components/gastos/gastosForm/GastosForm";
import type { Vehiculo } from "../../models/Vehiculos";
import { obtenerVehiculos } from "../../services/vehiculosService";

const Gastos = () => {
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [resumenGastos, setResumenGastos] = useState<ResumenGasto>();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [cargando, setCargando] = useState(true);
  const effectRan = useRef(false); 
  const effectRan2 = useRef(false); 
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [gastoActual, setGastoActual] = useState<Gasto | null>(null);


  type ResumenGasto = {
  total: number;
  mesActual: number;
  mesAnterior: number;
  anioActual: number;
};

  useEffect(() => {
    if (!effectRan.current) {
      obtenerGastos("compra")
        .then((res) => {
          setGastos(res.data)
          setResumenGastos(calcularResumen(res.data));
          console.log(resumenGastos)
        })
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

  const handleEditMode = (gasto: Gasto) => {
    setGastoActual(gasto);
    setModoEdicion(true);
    setMostrarModal(true);
  };

  const handleActualizar = async (actualizado: Gasto) => {
  try {
    const res = await actualizarGasto(actualizado.id, actualizado);
    setGastos((prev) =>
      prev.map((g) => (g.id === actualizado.id ? res.data : g))
    );
    setMostrarModal(false);
    setGastoActual(null);
    setModoEdicion(false);
  } catch (err) {
    alert("Error al editar gasto");
  }
};

  const handleEdit = async (gasto: Gasto) => {
    setGastoActual(gasto);
    setModoEdicion(true);
    setMostrarModal(true);
  };

  const handleEliminar = async (id: string) => {
    try {
      await eliminarGasto(id);
      setGastos((prev) => prev.filter((g) => g.id !== id));
    } catch (err) {
      alert("Error al eliminar gasto");
    }
  };

  const calcularResumen = (gastos: Gasto[]): ResumenGasto => {
    const total = gastos.reduce((acc, g) => acc + g.total, 0);
    const mesAnterior = gastos
      .filter((g) => new Date(g.fecha).getMonth() === new Date().getMonth() - 1)
      .reduce((acc, g) => acc + g.total, 0);
    const anioActual = gastos
      .filter((g) => new Date(g.fecha).getFullYear() === new Date().getFullYear())
      .reduce((acc, g) => acc + g.total, 0);
    const mesActual = gastos
      .filter((g) => new Date(g.fecha).getMonth() === new Date().getMonth())
      .reduce((acc, g) => acc + g.total, 0);
    return { total, mesActual, mesAnterior, anioActual};
  };

  if (cargando) return <p>Cargando...</p>;

  return (
    <div className="gastos-container">
      <h2>Compras</h2>
      <div className="gastos-resumen">
        <p>Total Gastos: ${resumenGastos?.total.toFixed(2)}</p>
        <p>Total del Año: ${resumenGastos?.anioActual.toFixed(2)}</p>
        <p>Mes Anterior: ${resumenGastos?.mesAnterior.toFixed(2)}</p>
        <p>Mes Actual: ${resumenGastos?.mesActual.toFixed(2)}</p>
      </div>
      <button onClick={() => setMostrarModal(true)} className="crear-btn">Registrar Compra</button>

      <div className="gasto-card-list">
        {Array.isArray(gastos) && gastos.length > 0 ? (
          gastos.map((gasto) => (
            <GastoCard key={gasto.id} gasto={gasto} onDelete={handleEliminar} onEdit={handleEditMode} vehiculos={vehiculos} />
          ))
        ) : (
          <p>No hay compras registradas.</p>
        )}
      </div>


      <Modal isOpen={mostrarModal} onClose={() => {
        setMostrarModal(false);
        setGastoActual(null);
        setModoEdicion(false);
        }}>
          <GastoForm
            onSubmit={modoEdicion ? handleActualizar : handleAgregar}
            gasto={gastoActual ?? undefined}
            vehiculos={vehiculos}
          />
        </Modal>

    </div>
  );
};

export default Gastos;
