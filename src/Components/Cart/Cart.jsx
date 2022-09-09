import React from "react";
// import Form from "../Form/Form";
import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// import CartTable from './Table';

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  console.log(cart);

  return (
    <div className="formContainer">
      {cart.map((item) => (
        <div className="cartItem" key={item.id}>
          <img src={item.img} alt="" className="cartImg" />
          <h1>{item.nombre}</h1>
          <h2>{item.precio}</h2>
          <h3>{item.cantidad}</h3>
          <h3>precio: $ {item.precio}</h3>
          <h3>cantidad: {item.cantidad}</h3>
          
          <button onClick={() => removeItem(item.id)}>Delete Product</button>
        </div>
      ))}
      <button onClick={clearCart}>Clear Cart</button>

      {/* <Form/> */}
    </div>
  );
};

export default Cart;
