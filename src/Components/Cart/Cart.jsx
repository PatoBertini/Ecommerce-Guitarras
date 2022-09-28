import React from "react";
import "./cart.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import Form from "./Form";
import compra from "../../assets/images/thankyou.jpeg";

const Cart = () => {
  const [idCompra, setIdCompra] = useState("");
  const [form, setForm] = useState(false);
  const { cart, removeItem, clearCart, totalCart } = useContext(CartContext);
  const calculateCart = totalCart();

  const handleId = (id) => {
    setIdCompra(id);
  };

  const handleClick = () => {
    setForm(true);
  };

  if (idCompra && !form) {
    return (
      <div className="thank">
        <img src={compra} alt="" />
        <h1 className="idRta">Gracias por comprar tu id es: <span className="otroColor">{idCompra}</span></h1>
      </div>
    );
  }

  if (form) {
    return (
      <Form
        cart={cart}
        calculateCart={calculateCart}
        clearCart={clearCart}
        handleId={handleId}
        setForm={setForm}
      />
    );
  }

  if (cart.length === 0) {
    return (
      <div className="emptyCart">
        <h1 className="carroVacio">YOUR CART IS EMPTY</h1>
        <Link to="/">
          <button className="buttonDetail">Go Buy!</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="formContainer">
      <table className="cartTable">
        <thead>
          <tr>
            <th>Img</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr className="cartItem" key={item.id}>
              <img src={item.img} alt="" className="cartImg" />
              <td>{item.nombre}</td>
              <td>{item.cantidad}</td>
              <td> € {item.precio}</td>
              <div onClick={() => removeItem(item.id)}>
                <AiFillDelete className="trashButton" />
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="totalCart">
        <h4>
          Total Cart: <span className="total">€ {calculateCart}</span>
        </h4>

        <button className="buyCart">
          <span className="text" onClick={handleClick}>
            Buy Now
          </span>
        </button>

        <button className="deleteCart" onClick={clearCart}>
          <span className="text">Clear Cart</span>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
