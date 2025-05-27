import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Vehiculos from "./pages/vehiculos/Vehiculos";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehiculos" element={<Vehiculos />} />
    </Routes>
  );
};

export default App;
