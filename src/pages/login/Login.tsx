import GoogleLoginButton from "../../common/login/Login";

const Login = () => {
    return (
        <div className="fondo">
            <div>
                <h1 className="titulo">Gestión Vehicular</h1>
                <p className="subtitulo">Inicia sesión para continuar</p>
                <div className="login-container">

                    <GoogleLoginButton/>

                </div>
            </div>
        </div>
    );
}

export default Login;