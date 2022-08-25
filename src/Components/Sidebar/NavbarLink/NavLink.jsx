import { NavLink as NavLinkReactRouter } from "react-router-dom";
import "../Sidebar.css";

const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkReactRouter
      {...props}
      className={({ isActive }) => (isActive ? "is-active" : undefined)}
      to={to}
    >
      {children}
    </NavLinkReactRouter>
  );
};

export default NavLink;
