import { useState } from "react";
import type { Gasto } from "../../../models/Gastos";

const GastoItemForm = ({ onAdd }: { onAdd: (item: Gasto["items"][0]) => void }) => {
  const [item, setItem] = useState({ descripcion: "", cantidad: 1, precio_unitario: 0 });

  const handleAdd = () => {
    if (!item.descripcion || item.cantidad <= 0 || item.precio_unitario <= 0) return alert("Campos inválidos");
    onAdd(item);
    setItem({ descripcion: "", cantidad: 1, precio_unitario: 0 });
  };

  return (
    <div>
      <h4>Agregar ítem</h4>
      <input name="descripcion" placeholder="Descripción" value={item.descripcion} onChange={(e) => setItem((p) => ({ ...p, descripcion: e.target.value }))} />
      <input type="number" name="cantidad" placeholder="Cantidad" value={item.cantidad} onChange={(e) => setItem((p) => ({ ...p, cantidad: Number(e.target.value) }))} />
      <input type="number" name="precio_unitario" placeholder="Precio unitario" value={item.precio_unitario} onChange={(e) => setItem((p) => ({ ...p, precio_unitario: Number(e.target.value) }))} />
      <button type="button" onClick={handleAdd}>Agregar Ítem</button>
    </div>
  );
};

export default GastoItemForm;