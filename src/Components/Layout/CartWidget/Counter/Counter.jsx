import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


const Counter = (stock, onAdd) => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={sumar}>
      <FontAwesomeIcon icon={faPlus} />
      </button>
      <span>{count}</span>
      <button onClick={restar}>
      <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
};

export default Counter;
