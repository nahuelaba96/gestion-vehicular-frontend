import { useState, useEffect, useRef } from "react";
import type { Vehiculo } from "../../models/Vehiculos";
import { crearVehiculo, eliminarVehiculo, obtenerVehiculos } from "../../services/vehiculosService";
import Modal from "../../components/modal/Modal";
import { VehiculoForm } from "../../components/vehiculos/vehiculosForm/VehiculoForm";
import "./Vehiculos.css";
import { VehiculoCard } from "../../components/vehiculos/vehiculosCard/VehiculoCard";

export const Vehiculos = () => {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const effectRan = useRef(false); 
  

  useEffect(() => {
    if (!effectRan.current) {
      async function fetchVehiculos() {
        const res = await obtenerVehiculos();
        setVehiculos(res.data);
      }
      fetchVehiculos();
      effectRan.current = true;
    }
  }, []);

  const handleAddVehiculo = async (nuevo: Vehiculo) => {
    try {
      const res = await crearVehiculo(nuevo);
      setVehiculos((prev) => [...(prev ?? []), res.data]);
      setModalOpen(false);
    } catch {
      alert("Error al crear vehículo");
    }
  };

  const handleEliminarVehiculo = async (id: string) => {
    try {
      await eliminarVehiculo(id);
      setVehiculos((prev) => (prev ?? []).filter((v) => v.id !== id));
    } catch {
      alert("Error al eliminar vehículo");
    }
  };


  return (
    <>
      <button  className="vehiculos-button-nuevo" onClick={() => setModalOpen(true)}>Nuevo Vehículo</button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h3>Nuevo Vehículo</h3>
        <VehiculoForm onAdd={handleAddVehiculo} />
      </Modal>

      <div className="vehiculos-card-list">
        {Array.isArray(vehiculos) && vehiculos.length > 0 ? (
          vehiculos.map((vehiculo) => (
            <VehiculoCard
              key={vehiculo.id}
              vehiculo={vehiculo}
              onDelete={handleEliminarVehiculo}
            />
          ))
        ) : (
          <p>No hay vehículos registrados.</p>
        )}
      </div>

    </>
  );
};

export default Vehiculos;