import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Vehiculos from "./pages/vehiculos/Vehiculos";
import Gmantenimientos from "./pages/gmantenimientos/Gmantenimientos"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehiculos" element={<Vehiculos />} />
      <Route path="/gastosdemantenimiento" element={<Gmantenimientos />} />
    </Routes>
  );
};

export default App;
