import React from "react";
import "../ItemDetail.css";
import Counter from "../../Counter/Counter";
import { useState } from "react";
import { Link } from 'react-router-dom';


const ItemDetail = ({ product }) => {
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (cantidad) => {
    console.log(cantidad);
    setCantidad(cantidad)
  }
  // Esta funcion esta declarada en el padre y se ejecuta en el hijo, cuando hace click el hijo envia la data por parametro

  return (
    <div className="itemDetailConteiner">
      <div className="itemDetail">
        <img src={product.img} alt="" />
        <h2>{product.nombre}</h2>
        <h3>Price: $ {product.precio}</h3>
        {
          cantidad === 0
          ? (<Counter stock={product.stock} initial={1} onAdd={onAdd} />)
          : (<Link to="/cart">Ir al carrito</Link>)
        }
        
       
      </div>
    </div>
  );
};

export default ItemDetail;
