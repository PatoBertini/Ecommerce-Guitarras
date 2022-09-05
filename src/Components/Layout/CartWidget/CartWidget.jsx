import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Layout.css";

const CartWidget = () => {
  

  return (
    <div className="carritoConteiner">
      <FontAwesomeIcon icon={faCartShopping} className="carrito" />
      
    </div>
  );
};

export default CartWidget;
