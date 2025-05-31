import { useNavigate } from "react-router-dom";
import authService from "../../services/authServices";

interface LogoutButtonProps {
  className?: string;  // acepta clase opcional
}

const LogoutButton = ({ className }: LogoutButtonProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.logout();
      navigate("/login");
    } catch (err) {
      console.error("Error al cerrar sesión:", err);
    }
  };

  return (
    <button onClick={handleLogout} className={className}>
      <span role="img" aria-label="Salir">🚪</span> Salir
    </button>
  );
};

export default LogoutButton;
