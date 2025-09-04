import { NavLink } from "react-router-dom";
import "./MenuNavbar.css";

const MenuNavbar = () => {
  const links = [
    { to: "/overral", label: "Geral" },
    { to: "/equipments", label: "Equipamentos" },
    { to: "/employees", label: "Funcionários" },
    { to: "/deliverys", label: "Entregas" },
  ];
  return (
    <div id="menu">
      <nav>
        <ul>
          {links.map((link) => (
            <li key="link.to">
              <NavLink to={link.to}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default MenuNavbar;
