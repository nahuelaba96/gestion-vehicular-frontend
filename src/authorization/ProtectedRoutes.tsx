import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import authService from "../services/authServices";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    authService.verify()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setAuthChecked(true));
  }, []);

  if (!authChecked) return <div>Verificando sesión...</div>;

  if (!isAuthenticated) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default ProtectedRoute;
