import { useState } from "react";
import type { Vehiculo } from "../../../models/Vehiculos";
import "./VehiculoForm.css";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
  

        <form onSubmit={handleSubmit} className="space-y-4 p-4 z-100">

          <div className="flex flex-col">
            <label htmlFor="marca" className="form-label">Marca*</label>
            <div className="input-field-container">
              <input
                id="marca"
                name="marca"
                placeholder="Marca"
                value={form.marca}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="modelo" className="form-label">Modelo*</label>
            <div className="input-field-container">
              <input
                id="modelo"
                name="modelo"
                placeholder="Modelo"
                value={form.modelo}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="anio" className="form-label">Año*</label>
            <div className="input-field-container">
              <input
                id="anio"
                name="anio"
                type="number"
                placeholder="Año"
                value={form.anio === 0 ? '' : form.anio}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="patente" className="form-label">Patente</label>
            <div className="input-field-container">
              <input
                id="patente"
                name="patente"
                placeholder="Patente"
                value={form.patente}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="tipo_combustible" className="form-label">Tipo Combustible*</label>
            <div className="input-field-container relative">
              <select
                id="tipo_combustible"
                name="tipo_combustible"
                value={form.tipo_combustible}
                onChange={handleChange}
                required
                className="input-field appearance-none pr-10">
                <option value="" disabled>Seleccione tipo combustible</option>
                <option value="nafta">Nafta</option>
                <option value="gasoil">Gasoil</option>
                <option value="eléctrico">Eléctrico</option>
                <option value="híbrido">Híbrido</option>
                <option value="gnc">GNC</option>
              </select>
              <div className="input-field-markdown">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>


          </div>

          <div className="flex flex-col">
            <label htmlFor="kilometros" className="form-label">Kilómetros*</label>
            <div className="input-field-container">
              <input
                id="kilometros"
                name="kilometros"
                type="number"
                placeholder="Kilómetros"
                value={form.kilometros === 0 ? '' : form.kilometros}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="nota" className="form-label">Notas</label>
            <div className="input-field-container">
              <input
                id="nota"
                name="nota"
                placeholder="Notas"
                value={form.nota}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-full outline-1 -outline-offset-1 outline-solid outline-indigo-600 px-4 py-2 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Crear
            </button>
          </div>
        </form>
  );
};
