import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Counter from "./Counter/Counter";
import "../Layout.css";

const CartWidget = () => {
  

  return (
    <div className="carritoConteiner">
      <FontAwesomeIcon icon={faCartShopping} className="carrito" />
      <Counter/>
    </div>
  );
};

export default CartWidget;
