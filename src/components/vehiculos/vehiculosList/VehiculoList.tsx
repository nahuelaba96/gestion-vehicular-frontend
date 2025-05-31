import type { Vehiculo } from "../../../models/Vehiculos";
import { VehiculoCard } from "../vehiculosCard/VehiculoCard";


interface Props {
  vehiculos: Vehiculo[];
  onDelete: (id: string) => void;
}

export const VehiculoList = ({ vehiculos, onDelete }: Props) => {
  return (
    <div className="vehiculo-list">
      {vehiculos.map((v) => (
        <VehiculoCard key={v.id} vehiculo={v} onDelete={onDelete} />
      ))}
    </div>
  );
};
