import type { Vehiculo } from "../../../models/Vehiculos";
import "./VehiculoCard.css"

interface Props {
  vehiculo: Vehiculo;
  onDelete: (id: string) => void;
}

export const VehiculoCard = ({ vehiculo, onDelete }: Props) => {
  return (
    <div className="vehiculo-card">
      <h3>{vehiculo.marca} {vehiculo.modelo}</h3>
      <p>Año: {vehiculo.anio}</p>
      <p>Patente: {vehiculo.patente}</p>
      <button onClick={() => onDelete(vehiculo.id)}>Eliminar</button>
    </div>
  );
};
