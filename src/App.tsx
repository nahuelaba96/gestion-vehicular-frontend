import { Routes, Route, useLocation } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./pages/home/Home";
import Vehiculos from "./pages/vehiculos/Vehiculos";
import Gmantenimientos from "./pages/gmantenimientos/Gmantenimientos";
import FooterTabs from "./footer/Footer";
import "./index.css";
import Login from "./pages/loginPage/LoginPage";
import ProtectedRoute from "./authorization/ProtectedRoutes";
import NotFound from "./pages/notFound/NotFound";
import Gastos from "./pages/compras/Compras";
import GCombustible from "./pages/gCombustible/GCombustible";

const App = () => {
  const location = useLocation();
  const validRoutes = ["/", "/login", "/vehiculos", "/gastos-mantenimiento", "/compras", "/gastos-combustible"];

  const shouldHideFooter = 
  location.pathname === "/login" || 
  !validRoutes.includes(location.pathname);

  return (
    <GoogleOAuthProvider clientId="380556145557-orli0meppjcmfdh6pnf0imm42q1bhioi.apps.googleusercontent.com">
      <div className="app-container min-h-screen pb-26">
        <div style={{ flex: 1, overflow: "auto" }}>
          <Routes>

            <Route path="*" element={<NotFound />} />

            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vehiculos"
              element={
                <ProtectedRoute>
                  <Vehiculos />
                </ProtectedRoute>
              }
            />
            <Route
              path="/compras"
              element={
                <ProtectedRoute>
                  <Gastos />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gastos-mantenimiento"
              element={
                <ProtectedRoute>
                  <Gmantenimientos />
                </ProtectedRoute>
              }
            />
          <Route
              path="/gastos-combustible"
              element={
                <ProtectedRoute>
                  <GCombustible />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>

        {!shouldHideFooter && <FooterTabs />}
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
