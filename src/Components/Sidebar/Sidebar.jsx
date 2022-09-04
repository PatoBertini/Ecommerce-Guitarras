import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/guitarraLogo.png";
import CartWidget from "../Layout/CartWidget/CartWidget";
import NavLink from "./NavbarLink/NavLink";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/category/acoustic">Acoustic</NavLink>
        <NavLink to="/category/electric">Electric </NavLink>
        <NavLink to="/category/classic">Classic </NavLink>
        <NavLink to="/category/parts"> Parts</NavLink>
        <NavLink to="/category/accessories"> Accessories</NavLink>
        <NavLink to="/category/offers">Offers</NavLink>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
