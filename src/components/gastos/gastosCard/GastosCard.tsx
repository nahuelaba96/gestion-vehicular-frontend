import type { Gasto } from "../../../models/Gastos";
import type { Vehiculo } from "../../../models/Vehiculos";
import "./GastosCard.css";

type Props = {
  gasto: Gasto;
  vehiculos: Vehiculo[];
  onDelete: (id: string) => void;
  onEdit: (gasto: Gasto) => void;
};

const GastoCard = ({ gasto, onDelete, onEdit, vehiculos }: Props) => {
  const vehiculo = vehiculos?.find((v) => v.id === gasto.vehiculo_id);
  return (

    <div>

      <div className="card relative">
        <span className="absolute top-4 right-6 text-sm text-gray-500">
          {vehiculo ? `${vehiculo.marca} ${vehiculo.modelo}` : "Sin vehículo"}
        </span>
        <img
          className="h-24 w-24 rounded-full object-cover"
          src="https://img.icons8.com/fluency/96/car.png"
          alt="image-card-vehiculo"
        // src={vehiculo.imagenUrl ?? "/img/default-car.png"} // reemplazá con un campo real o default
        // alt={vehiculo.marca + " " + vehiculo.modelo}
        />

        <div className="space-y-2 text-center sm:text-left w-full">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-gray-900">{gasto.proveedor}</p>
            <p className="text-sm text-gray-500">Fecha: {new Date(gasto.fecha).toLocaleDateString()}</p>
            <p className="text-sm text-gray-500">{gasto.nota}</p>
            <div className="">

              <ul className="space-y-1 mt-2">
                {gasto.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center bg-gray-100 text-gray-700 rounded-md px-3 py-1.5 text-sm"
                  >
                    <span> {item.cantidad} × {item.descripcion}</span>
                    <span className="text-gray-500">${item.precio_unitario.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-500">Total: ${gasto.total.toFixed(2)}</p>
          </div>
          <div className="flex justify-center sm:justify-start gap-2">
            <button
              onClick={() => onEdit(gasto)}
              className="border border-blue-200 px-4 py-2 text-sm text-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-200">
              Editar
            </button>
            <button
              onClick={() => onDelete(gasto.id)}
              className="border border-red-200 px-4 py-2 text-sm text-red-600 hover:border-transparent hover:bg-red-600 hover:text-white rounded-full transition-colors duration-200">
              Eliminar
            </button>
          </div>
        </div>
      </div>

    </div>

  );
};

export default GastoCard;