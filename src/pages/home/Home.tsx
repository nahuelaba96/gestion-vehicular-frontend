import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const irAVehiculos = () => {
    navigate("/vehiculos");
  };

  const Gmantenimientos = () => {
    navigate("/gastosdemantenimiento");
  };

  const irACompras = () => {
    navigate("/gastosdecompra");
  };

  const totalGastos = 0; // Placeholder para lógica futura
  const notificaciones = [
    "Cambio de aceite en 3 días",
    "ITV vence el 10/06/2025",
  ];

  return (
    <div className="fondo">
      <div className="btn-contenedor">
        <h1 className="titulo">Gestión Vehicular</h1>

        <div className="resumen-gastos">
          <p>Total gastado este mes:</p>
          <strong>${totalGastos}</strong>
        </div>

        <button onClick={irAVehiculos} className="btn1">
          🚗 Ir a vehículos
        </button>
        <button onClick={Gmantenimientos} className="btn1">
          🧰 Gastos de mantenimientos
        </button>
        <button onClick={irACompras} className="btn1">
          ⛽ Gastos de compra
        </button>

        <div className="notificaciones">
          <p className="noti-titulo">
            🔔 Notificaciones
          </p>
          <ul>
            {notificaciones.map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

