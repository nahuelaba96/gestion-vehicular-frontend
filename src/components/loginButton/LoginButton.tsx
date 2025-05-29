import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authServices';

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse: any) => {
    try {
      await authService.login(credentialResponse.credential);
      navigate("/"); // redirigir al home con React Router
    } catch (error) {
      console.error("Error al autenticar con backend:", error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={() => console.log("Error de login")}
    />
  );
};

export default GoogleLoginButton;
