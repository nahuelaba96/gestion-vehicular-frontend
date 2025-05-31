import { useState } from "react";
import type { Vehiculo } from "../../../models/Vehiculos";

interface Props {
  onAdd: (vehiculo: Vehiculo) => void;
}

export const VehiculoForm = ({ onAdd }: Props) => {
  const [form, setForm] = useState({
    marca: "",
    modelo: "",
    anio: 0,
    patente: "",
    tipo: "",
    tipo_combustible: "",
    kilometros: 0,
    nota: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: ["anio", "kilometros"].includes(name) ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      id: "",
      marca: form.marca,
      modelo: form.modelo,
      anio: form.anio,
      patente: form.patente,
      tipo: form.tipo,
      tipo_combustible: form.tipo_combustible,
      kilometros: form.kilometros,
      nota: form.nota,
    });
    setForm({
      marca: "",
      modelo: "",
      anio: 0,
      patente: "",
      tipo: "",
      tipo_combustible: "",
      kilometros: 0,
      nota: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="vehiculo-form">
      <label htmlFor="marca">Marca</label>
      <input
        id="marca"
        name="marca"
        placeholder="Marca"
        value={form.marca}
        onChange={handleChange}
        required
      />

      <label htmlFor="modelo">Modelo</label>
      <input
        id="modelo"
        name="modelo"
        placeholder="Modelo"
        value={form.modelo}
        onChange={handleChange}
        required
      />

      <label htmlFor="anio">Año</label>
      <input
        id="anio"
        name="anio"
        type="number"
        placeholder="Año"
        value={form.anio}
        onChange={handleChange}
        required
      />

      <label htmlFor="patente">Patente</label>
      <input
        id="patente"
        name="patente"
        placeholder="Patente"
        value={form.patente}
        onChange={handleChange}
        required
      />

      <label htmlFor="tipo">Tipo</label>
      <input
        id="tipo"
        name="tipo"
        placeholder="Tipo"
        value={form.tipo}
        onChange={handleChange}
        required
      />

      <label htmlFor="tipo_combustible">Tipo Combustible</label>
      <input
        id="tipo_combustible"
        name="tipo_combustible"
        placeholder="Tipo Combustible"
        value={form.tipo_combustible}
        onChange={handleChange}
        required
      />

      <label htmlFor="kilometros">Kilómetros</label>
      <input
        id="kilometros"
        type="number"
        name="kilometros"
        placeholder="Kilómetros"
        value={form.kilometros}
        onChange={handleChange}
        required
      />

      <label htmlFor="nota">Notas</label>
      <input
        id="nota"
        name="nota"
        placeholder="Notas"
        value={form.nota}
        onChange={handleChange}
      />

      <button type="submit">Crear</button>
    </form>
  );
};
