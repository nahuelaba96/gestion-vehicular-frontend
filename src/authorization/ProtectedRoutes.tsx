import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import authService from "../services/authServices";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const effectRan = useRef(false); 

  useEffect(() => {
    if (!effectRan.current) {
    authService.verify()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setAuthChecked(true));
      effectRan.current = true;
    }
  }, []);

  if (!authChecked) return <div>Verificando sesión...</div>;

  if (!isAuthenticated) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default ProtectedRoute;
