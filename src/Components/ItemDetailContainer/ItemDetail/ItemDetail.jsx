import React from "react";
import "../ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="itemDetailConteiner">
      <div className="itemDetail">
      <img src={product.img} alt="" />
        <h2>{product.nombre}</h2>
        <h3>aca va el precio</h3>
        <button>agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
