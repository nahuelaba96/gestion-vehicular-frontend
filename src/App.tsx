import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./pages/home/Home";
import Vehiculos from "./pages/vehiculos/Vehiculos";
import Gmantenimientos from "./pages/gmantenimientos/Gmantenimientos";
import FooterTabs from "./footer/Footer";
import "./index.css";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="380556145557-orli0meppjcmfdh6pnf0imm42q1bhioi.apps.googleusercontent.com">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
        }}>
        <div style={{ flex: 1, overflow: "auto" }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/vehiculos" element={<Vehiculos />} />
            <Route path="/gastosdemantenimiento" element={<Gmantenimientos />} />
          </Routes>
        </div>
        <FooterTabs />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
