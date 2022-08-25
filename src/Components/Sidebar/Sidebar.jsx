import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/guitarraLogo.png";

import NavLink from "./NavbarLink/NavLink";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/acoustic">Acoustic</NavLink>
        <NavLink to="/electric">Electric </NavLink>
        <NavLink to="/classic">Classic </NavLink>
        <NavLink to="/parts"> Parts</NavLink>
        <NavLink to="/accessories"> Accessories</NavLink>
        <NavLink to="/offers">Offers</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
