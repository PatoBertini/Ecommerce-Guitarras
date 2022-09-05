import React from "react";
import { useState } from "react";
import "../Cart/cart.css";

const Form = () => {
  const [nombre, setNombre] = useState("");
 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nombre);
  };

  const handleNameInput = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="nombre"
          value={nombre}
          onChange={handleNameInput}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
