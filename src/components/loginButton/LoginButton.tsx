import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = () => {
  const handleLoginSuccess = async (credentialResponse: any) => {
    try {
      await axios.post('http://localhost:8080/auth/google', {
        token: credentialResponse.credential,
      }, {
        withCredentials: true,
      });

      window.location.href = '/'; // Redirigir al dashboard después del login exitoso
    } catch (error) {
      console.error('Error al autenticar con backend:', error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={() => console.log('Error de login')}
    />
  );
};

export default GoogleLoginButton;
