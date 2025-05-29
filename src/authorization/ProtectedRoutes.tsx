import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/verify", {
        withCredentials: true, 
      })
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setAuthChecked(true));
  }, []);

  if (!authChecked) return <div>Verificando sesión...</div>;

  if (!isAuthenticated) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default ProtectedRoute;
