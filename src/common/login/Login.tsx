import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = () => {
  const handleLoginSuccess = async (credentialResponse: any) => {
    debugger;
    try {
      const res = await axios.post('http://localhost:8080/auth/google', {
        token: credentialResponse.credential,
      });

      console.log('Token JWT recibido desde backend:', res.data.token);

      localStorage.setItem('jwt', res.data.token);
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
