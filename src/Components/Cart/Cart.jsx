import React from "react";
import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const { cart, removeItem, clearCart, totalCart } = useContext(CartContext);
  // console.log(cart);

  const calculateCart = totalCart();

  if (cart.length === 0) {
    return(
      <div className='emptyCart'>
        <h1>TU CARRITO ESTA VACIO</h1>
        <h2> Anda y comprate una buena viola</h2>
        <Link to='/'>Ve a comprar</Link>
      </div>
    )
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

      {/* <Form/> */}
    </div>
  );
};

export default Cart;


