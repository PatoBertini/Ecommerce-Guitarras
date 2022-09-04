import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";


const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="display">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
