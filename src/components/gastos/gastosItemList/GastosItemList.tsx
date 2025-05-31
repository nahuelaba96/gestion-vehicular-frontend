import type { Gasto } from "../../../models/Gastos";

const GastoItemList = ({ items, onDelete }: { items: Gasto["items"]; onDelete: (index: number) => void }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.descripcion} - Cantidad: {item.cantidad} - Precio: ${item.precio_unitario.toFixed(2)}
          <button onClick={() => onDelete(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default GastoItemList;