import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

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
        <span>Cantidad: {count}</span>
        <button onClick={sumar}>
          <FontAwesomeIcon icon={faPlus} />
        </button>

        <button onClick={restar}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
      <div className="agregarCarrito">
        <button onClick={agregar}>Add Cart</button>
      </div>
    </div>
  );
};

export default Counter;

// El Add Cart, envia la data de count al padre. lo envia como parametro y lo recibe como argumento
