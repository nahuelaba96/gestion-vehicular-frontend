import type { Vehiculo } from "../../../models/Vehiculos";
import "./VehiculoCard.css"

interface Props {
  vehiculo: Vehiculo;
  onDelete: (id: string) => void;
}

export const VehiculoCard = ({ vehiculo, onDelete }: Props) => {
  return (

    <div>

      <div className="card">
        <img
          className="h-24 w-24 rounded-full object-cover"
          src="https://img.icons8.com/fluency/96/car.png"
          alt="image-card-vehiculo"

        // src={vehiculo.imagenUrl ?? "/img/default-car.png"} // reemplazá con un campo real o default
        // alt={vehiculo.marca + " " + vehiculo.modelo}

        />

        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-gray-900">{vehiculo.marca} {vehiculo.modelo}</p>
            <p className="text-sm text-gray-500">Año: {vehiculo.anio} | Patente: {vehiculo.patente}</p>
          </div>
          <div className="flex justify-center sm:justify-start gap-2">
            <button
              // onClick={() => handleEditarVehiculo(vehiculo)}
              className="border border-blue-200 px-4 py-2 text-sm text-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-200"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(vehiculo.id)}
              className="border border-red-200 px-4 py-2 text-sm text-red-600 hover:border-transparent hover:bg-red-600 hover:text-white rounded-full transition-colors duration-200"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
