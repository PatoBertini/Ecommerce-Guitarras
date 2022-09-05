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

  return (
    <div>
      <div className="sumarRestar">
        <button onClick={sumar}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <span>{count}</span>
        <button onClick={restar}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
      <div className="agregarCarrito">
        <button onClick={() => onAdd(count)}>Add Cart</button>
      </div>
    </div>
  );
};

export default Counter;
