import React from "react";
import { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
  }

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
