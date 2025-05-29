import type { AxiosResponse } from "axios";
import type { Vehiculo } from "../models/Vehiculos";
import apiClient from "./apiClient";

export const obtenerVehiculos = (): Promise<AxiosResponse<Vehiculo[]>> => {
  return apiClient.get<Vehiculo[]>("/vehicles/");
};