import { useEffect, useRef, useState } from "react";
import type { Gasto } from "../../../models/Gastos";
import "./GastosForm.css";
import type { Vehiculo } from "../../../models/Vehiculos";
import { obtenerVehiculos } from "../../../services/vehiculosService";

interface Props {
  onSubmit: (gasto: Gasto) => void;
  gasto?: Gasto;
  vehiculos?: Vehiculo[];
}

const GastoForm = ({ onSubmit, gasto, vehiculos: vehiculosProp }: Props) => {
  const [formData, setFormData] = useState({
    vehiculo_id: "",
    fecha: "",
    proveedor: "",
    nota: "",
    items: [] as Gasto["items"],
  });

  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const effectRan = useRef(false);

  // Cargar vehículos desde props o fetch
  useEffect(() => {
    if (!vehiculosProp && !effectRan.current) {
      obtenerVehiculos()
        .then((res) => setVehiculos(res.data))
        .catch(console.error);
      effectRan.current = true;
    } else if (vehiculosProp) {
      setVehiculos(vehiculosProp);
    }
  }, [vehiculosProp]);

  // Prellenar form si estamos editando
  useEffect(() => {
    if (gasto) {
      setFormData({
        vehiculo_id: gasto.vehiculo_id || "",
        fecha: gasto.fecha,
        proveedor: gasto.proveedor,
        nota: gasto.nota,
        items: gasto.items,
      });
    }
  }, [gasto]);

  const [itemTemp, setItemTemp] = useState({
    descripcion: "",
    cantidad: 1,
    precio_unitario: 0,
  });

  const agregarItem = () => {
    if (!itemTemp.descripcion || itemTemp.cantidad <= 0 || itemTemp.precio_unitario <= 0) {
      alert("Completa los campos del ítem");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      items: [...prev.items, itemTemp],
    }));
    setItemTemp({ descripcion: "", cantidad: 1, precio_unitario: 0 });
  };

  const calcularTotal = () => {
    return formData.items.reduce((acc, item) => acc + item.cantidad * item.precio_unitario, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.items.length === 0) return alert("Agrega al menos un ítem");

    const nuevoGasto: Gasto = {
      ...formData,
      id: gasto?.id || "",
      fecha_insert: gasto?.fecha_insert || new Date(),
      total: calcularTotal(),
      tipo: "compra", // Asignar tipo por defecto
    };

    onSubmit(nuevoGasto);
  };

  return (
    <form onSubmit={handleSubmit} className="gasto-form">
      <label>
        Vehículo
        <select
          value={formData.vehiculo_id}
          onChange={(e) => setFormData({ ...formData, vehiculo_id: e.target.value })}
        >
          <option value="">(Sin asignar)</option>
          {vehiculos.map((v) => (
            <option key={v.id} value={v.id}>
              {v.marca} {v.modelo} ({v.patente})
            </option>
          ))}
        </select>
      </label>

      <label>
        Fecha
        <input type="date" value={formData.fecha} onChange={(e) => setFormData({ ...formData, fecha: e.target.value })} required />
      </label>

      <label>
        Proveedor
        <input value={formData.proveedor} onChange={(e) => setFormData({ ...formData, proveedor: e.target.value })} required />
      </label>

      <label>
        Nota
        <textarea value={formData.nota} onChange={(e) => setFormData({ ...formData, nota: e.target.value })} required />
      </label>

      <div className="items-input">
        <input placeholder="Descripción" value={itemTemp.descripcion} onChange={(e) => setItemTemp({ ...itemTemp, descripcion: e.target.value })} />
        <input type="number" placeholder="Cantidad" value={itemTemp.cantidad} onChange={(e) => setItemTemp({ ...itemTemp, cantidad: Number(e.target.value) })} />
        <input type="number" placeholder="Precio unitario" value={itemTemp.precio_unitario} onChange={(e) => setItemTemp({ ...itemTemp, precio_unitario: Number(e.target.value) })} />
        <button type="button" onClick={agregarItem}>Agregar ítem</button>
      </div>

      <ul>
        {formData.items.map((item, i) => (
          <li key={i}>{item.descripcion} - {item.cantidad} x ${item.precio_unitario.toFixed(2)}</li>
        ))}
      </ul>

      <p><strong>Total: ${calcularTotal().toFixed(2)}</strong></p>
      <button type="submit">Guardar Gasto</button>
    </form>
  );
};

export default GastoForm;
