// src/services/authService.ts
import apiClient from "./apiClient";

const authService = {
  login: async (googleToken: string) => {
    const response = await apiClient.post("/auth/google", { token: googleToken });
    return response.data;
  },

  logout: async () => {
    await apiClient.post("/auth/logout");
  },

  verify: async () => {
    await apiClient.get("/auth/verify");
  },

  // Opcional para traer datos del usuario
  getCurrentUser: async () => {
    const response = await apiClient.get("/me");
    return response.data;
  },
};

export default authService;
