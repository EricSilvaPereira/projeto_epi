import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import MenuNavbar from "../components/MenuNavbar/MenuNavbar";

const Layout = () => {
  return (
    <div className="main-layout">
      <Header />
      <MenuNavbar />
      <Outlet />
    </div>
  );
};

export default Layout;
