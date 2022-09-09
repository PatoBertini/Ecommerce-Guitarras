import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../ItemDetailContainer/ItemDetail.css";



const Counter = ({ initial, onAdd, stock }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count === stock) {
      alert("We dont have more stock, you can't buy anymore from this product");
    } else {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count === 0) {
      alert("Error, you must add");
    } else {
      setCount(count - 1);
    }
  };

  const agregar = () => {
    onAdd(count);
  };

  return (
    <div>
      <div className="sumarRestar">
        <span>Quantity: {count}</span>
        <button className="buttonq" onClick={sumar}>
          <FontAwesomeIcon icon={faPlus} />
        </button>

        <button className="buttonq" onClick={restar}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
      <div className="agregarCarrito">
        <button className="buttonDetail" onClick={agregar}>
         
        <FontAwesomeIcon icon={faCartPlus} className="buttonCart" /> Add Cart
        </button>
      </div>
    </div>
  );
};

export default Counter;

// El Add Cart, envia la data de count al padre. lo envia como parametro y lo recibe como argumento
