import { useEffect, useRef, useState } from "react";
import type { Vehiculo } from "../../models/Vehiculos";
import { obtenerVehiculos } from "../../services/vehiculosService";

const Vehiculos = () => {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [cargando, setCargando] = useState(true);
  const effectRan = useRef(false); 

useEffect(() => {
    if (!effectRan.current) {
      obtenerVehiculos()
        .then((res) => {
          setVehiculos(res.data);
          setCargando(false);
        })
        .catch((error) => {
          console.error(error);
          setCargando(false);
        });
      effectRan.current = true;
    }
  }, []);


  if (cargando) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Listado de Vehículos</h2>
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Patente</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Tipo de Combustible</th>
            <th>Kilómetros</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.tipo}</td>
              <td>{v.patente}</td>
              <td>{v.marca}</td>
              <td>{v.modelo}</td>
              <td>{v.anio}</td>
              <td>{v.tipo_combustible}</td>
              <td>{v.kilometros}</td>
              <td>{v.nota}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vehiculos;