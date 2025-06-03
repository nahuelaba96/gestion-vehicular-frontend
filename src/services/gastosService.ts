import type { AxiosResponse } from "axios";
import apiClient from "./apiClient";
import type { Gasto } from "../models/Gastos";

export const obtenerGastos = (tipo: String): Promise<AxiosResponse<Gasto[]>> => {
  return apiClient.get<Gasto[]>(`/expenses/?tipo=${tipo}`);
};

export const crearGasto = (gasto: Gasto): Promise<AxiosResponse<Gasto>> => {
  return apiClient.post<Gasto>("/expenses/", gasto);
};

export const actualizarGasto = (
  id: string,
  gasto: Gasto
): Promise<AxiosResponse<Gasto>> => {
  return apiClient.put<Gasto>(`/expenses/${id}`, gasto);
}

export const eliminarGasto = (id: string): Promise<AxiosResponse<void>> => {
  return apiClient.delete<void>(`/expenses/${id}`);
}

export const obtenerGastosPorVehiculo = (
  vehiculoId: string
): Promise<AxiosResponse<Gasto[]>> => {
  return apiClient.get<Gasto[]>(`/expenses/vehicle/${vehiculoId}/`);
}
