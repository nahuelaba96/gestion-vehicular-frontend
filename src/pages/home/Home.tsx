import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const irAVehiculos = () => {
    navigate("/vehiculos");
  };

  return (
    <div>
      <h1>Página de inicio</h1>
      <button onClick={irAVehiculos}>Ir a Vehículos</button>
    </div>
  );
};

export default Home;
