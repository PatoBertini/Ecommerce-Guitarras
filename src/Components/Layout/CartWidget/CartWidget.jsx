import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";


import "../Layout.css";

const CartWidget = () => {
  
const { cart, totalCartWidget } = useContext(CartContext)

const cantidadCart = totalCartWidget()






  return (
    <div className="carritoConteiner">
      <FontAwesomeIcon icon={faCartShopping} className="carrito" />
      <span>{cantidadCart === 0 ? <></> : cantidadCart}</span>
    </div>
  );
};

export default CartWidget;
