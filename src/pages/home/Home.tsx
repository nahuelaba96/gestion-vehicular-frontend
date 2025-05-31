import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/logoutButton/LogoutButton";
import "./home.css";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="fondo">

      <div className ="app-container">
        <header className="header">
          <h1 className="titulo">Gestiona tu vehículos</h1>
          <div className="acciones">
            <button className="icono-boton" onClick={() => navigate("/vehiculos")}>🚗</button>
            <button className="icono-boton">👤</button>
            <LogoutButton className="icono-boton logout"></LogoutButton>
          </div>
        </header>
      </div>
    </div>

  );
};

export default Home;

