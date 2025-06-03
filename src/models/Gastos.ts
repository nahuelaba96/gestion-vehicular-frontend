import type { Vehiculo } from "./Vehiculos";

export interface Gasto {
  id: string;
  vehiculo_id: Vehiculo["id"];
  tipo: string; // "mantenimiento", "combustible", "peaje", etc.
  fecha_insert: Date;
  fecha: string;
  proveedor: string;
  nota: string;
  items: Item[];
  total: number;
}

interface Item {
  descripcion: string;
  cantidad: number;
  precio_unitario: number;
}