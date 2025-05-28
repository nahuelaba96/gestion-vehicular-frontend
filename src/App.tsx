import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Vehiculos from "./pages/vehiculos/Vehiculos";
import Gmantenimientos from "./pages/gmantenimientos/Gmantenimientos"
import FooterTabs from "./footer/Footer";
import "./index.css"; // Import global styles

const App = () => {
  return (
   <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw" }}>

      <div style={{ flex: 1, overflow: "auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/gastosdemantenimiento" element={<Gmantenimientos />} />
        </Routes>
      </div>
      <FooterTabs />
    </div>
  );
};

export default App;
