import type { Gasto } from "../../../models/Gastos";
import type { Vehiculo } from "../../../models/Vehiculos";
import "./GastosCard.css";

type Props = {
  gasto: Gasto;
  vehiculos: Vehiculo[];
  onDelete: (id: string) => void;
};

const GastoCard = ({ gasto, onDelete, vehiculos }: Props) => {
  const vehiculo = vehiculos.find((v) => v.id === gasto.vehiculo_id);
  return (
    <div className="gasto-card">
      <div className="gasto-card-header">
        <h3 className="gasto-proveedor">{gasto.proveedor}</h3>
        <span className="gasto-vehiculo">
          {vehiculo ? `${vehiculo.marca} ${vehiculo.modelo}` : "Sin vehículo"}
        </span>
      </div>

      <p className="gasto-fecha">
        Fecha: {new Date(gasto.fecha).toLocaleDateString()}
      </p>
      <p className="gasto-nota">{gasto.nota}</p>

      <ul className="gasto-items">
        {gasto.items.map((item, idx) => (
          <li key={idx}>
            {item.descripcion} - {item.cantidad} x $
            {item.precio_unitario.toFixed(2)}
          </li>
        ))}
      </ul>

      <p className="gasto-total">Total: ${gasto.total.toFixed(2)}</p>

      <button className="gasto-eliminar" onClick={() => onDelete(gasto.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default GastoCard;