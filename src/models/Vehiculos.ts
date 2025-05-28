// src/models/Vehiculo.ts

// export interface Vehiculo {
//   id: number;
//   auto: string;
//   patente: string;
//   tipo_bitacora: string;
//   componente_recambio: string;
//   componente_instalado: string;
//   marca: string;
//   fecha: string; // o Date si lo parseás
//   vendedor: string;
//   kilometro: number;
//   costo: number;
//   nota: string;
//   fecha_proximo: string; // o Date
//   kilometros_proximo: number;
// }

export interface Vehiculo {
  id: number;
  tipo: string;
  patente: string;
  marca: string;
  modelo: string;
  anio: number;
  tipo_combustible: string;
  kilometros: number;
  nota: string;
}