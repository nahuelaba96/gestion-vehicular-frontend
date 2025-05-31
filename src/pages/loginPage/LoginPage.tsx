import GoogleLoginButton from "../../components/loginButton/LoginButton";
import "./LoginPage.css";

const Login = () => {
    return (
        <div className="fondo-login">
            <div className="login-container">
                <h1 className="titulo">Gestión Vehicular</h1>
                <p className="subtitulo">Inicia sesión para continuar</p>
                <GoogleLoginButton />
            </div>
        </div>

    );
}

export default Login;