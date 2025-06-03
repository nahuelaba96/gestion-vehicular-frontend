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
      {!modalOpen && (
          <button
            onClick={() => setModalOpen(true)}
            className="fixed bottom-32 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 hover:bg-sky-700 text-white shadow-lg transition-colors duration-300 text-3xl"
          >
            +
          </button>
        )}



      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h3 className="text-xl font-bold mb-4">Nuevo Vehículo</h3>
        <VehiculoForm onAdd={handleAddVehiculo} />
      </Modal>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-4">
        {Array.isArray(vehiculos) && vehiculos.length > 0 ? (
          vehiculos.map((vehiculo) => (
            <VehiculoCard
              key={vehiculo.id}
              vehiculo={vehiculo}
              onDelete={handleEliminarVehiculo}
            />
          ))
        ) : (
          <p className="text-gray-500">No hay vehículos registrados.</p>
        )}
      </div>
    </>
  );
};

export default Vehiculos;