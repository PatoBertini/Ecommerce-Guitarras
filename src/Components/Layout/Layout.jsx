
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import CartWidget from "./CartWidget/CartWidget";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="display">
        <CartWidget  />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
