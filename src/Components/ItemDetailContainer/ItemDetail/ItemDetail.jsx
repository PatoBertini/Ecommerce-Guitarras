import React from "react";
import "../ItemDetail.css";
import Counter from "../../Counter/Counter";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import toast, { Toaster } from "react-hot-toast";

const ItemDetail = ({ product }) => {
  const [cantidad, setCantidad] = useState(0);
  const { cart, addToCart, isInCart } = useContext(CartContext);

  const notify = () =>
    toast.success("Item Loaded To The Cart.", {
      style: {
        border: "1px solid green",
        padding: "16px",
        color: "green",
      },
      iconTheme: {
        primary: "green",
        secondary: "white",
      },
      duration: 3000,
    });

  // desestructuramos useContext y obtenemos la funcion addToCart del context CartContext

  const onAdd = (quantity) => {
    setCantidad((prevState) => prevState + quantity);
    addToCart(product, quantity);
    isInCart(product);
    notify();
  };
  // Esta funcion esta declarada en el padre y se ejecuta en el hijo, cuando hace click el hijo envia la data por parametro

  return (
    <div className="itemDetailConteiner">
      <div className="imgDetailConteiner">
        <img src={product.img} alt="" className="imgDetail" />
      </div>
      <div className="itemDetail">
        <h1>{product.nombre}</h1>
        <h2>
          Ergonomically designed for comfort with a slim carbon fiber body, the
          Virtuo is an acoustic guitar made specifically with the electric
          player in mind.
        </h2>
        <h3>Price: € {product.precio}</h3>
        {cantidad === 0 ? (
          <Counter stock={product.stock} initial={1} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <button className="buttonDetail" >Ir al carrito</button>
          </Link>
        )}
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default ItemDetail;
