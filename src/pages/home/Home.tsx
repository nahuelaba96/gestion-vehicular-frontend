import "./home.css";

const Home = () => {
  const totalGastos = 0; // Placeholder para lógica futura
  const notificaciones = [
    "Cambio de aceite en 3 días",
    "ITV vence el 10/06/2025",
  ];

  return (
    <div className="fondo">

      <div className ="app-container">
        <header className="header">
        <h1 className="titulo">Gestiona tu vehículos</h1>
          <div className="acciones">
            <button className="icono-boton">➕</button>
            <button className="icono-boton">👤</button>
          </div>
        </header>
      </div>


        <div>
          <div className="resumen-gastos">
            <p>Total gastado este mes:</p>
            <strong>${totalGastos}</strong>
          </div>
          <div className="notificaciones">
            <p className="noti-titulo">🔔 Notificaciones</p>
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

