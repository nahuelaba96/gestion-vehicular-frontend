import axios from "axios";
import { getCookie } from "../utils/cookies";

const BASE_URL = "https://gestion-vehicular-backend-production.up.railway.app";
// const BASE_URL = "http://localhost:8080";

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // para enviar cookies
});

apiClient.interceptors.request.use((config) => {
  const token = getCookie("jwt"); // o el nombre de tu cookie
  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
