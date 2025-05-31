import type { AxiosResponse } from "axios";
import type { Vehiculo } from "../models/Vehiculos";
import apiClient from "./apiClient";

export const obtenerVehiculos = (): Promise<AxiosResponse<Vehiculo[]>> => {
  return apiClient.get<Vehiculo[]>("/vehicles/");
};

export const crearVehiculo = (vehiculo: Vehiculo): Promise<AxiosResponse<Vehiculo>> => {
  return apiClient.post<Vehiculo>("/vehicles/", vehiculo);
};

export const actualizarVehiculo = (
  id: string,
  vehiculo: Vehiculo
): Promise<AxiosResponse<Vehiculo>> => {
  return apiClient.put<Vehiculo>(`/vehicles/${id}/`, vehiculo);
}

export const eliminarVehiculo = (id: string): Promise<AxiosResponse<void>> => {
  return apiClient.delete<void>(`/vehicles/${id}`);
}