
import "./footer.css";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
    { path: "/", label: "🏠 Inicio" },
    { path: "/gastos-mantenimiento", label: "🛠️ Gastos de mantenimiento" },
    { path: "/gastos-combustible", label:"⛽ Gastos de combustible" },
    { path: "/compras", label:"🛍️ Compras" },
];

const FooterTabs = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <footer className="botones-footer">
            {tabs.map((tab) => {
                const isActive = location.pathname === tab.path;
                return (
                    <button
                        key={tab.path}
                        onClick={() => navigate(tab.path)}
                        className={isActive ? "btn2 active" : "btn2"}>
                        {tab.label}
                    </button>
                );
            })}
        </footer>
    );
};

export default FooterTabs;
