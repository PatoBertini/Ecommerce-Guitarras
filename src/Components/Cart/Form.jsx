import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";

import { db } from "../../firebase/firebaseConfig";
import "../Cart/cart.css";
import "./form.css";
import toast, { Toaster } from "react-hot-toast";

const Form = ({ cart, calculateCart, clearCart, handleId, setForm }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const notify = () =>
    toast.success("Purchase success.", {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      buyer: { nombre, apellido, email },
      items: cart,
      total: calculateCart,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => {
      handleId(res.id);
      clearCart();
      notify();
      setTimeout(() => {
        setForm(false);
      }, 2000);
    });
  };

  const handleNameInput = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoInput = (event) => {
    setApellido(event.target.value);
  };

  const handleDireccionInput = (event) => {
    setDireccion(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="formSection">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="nombre"
          value={nombre}
          onChange={handleNameInput}
          required
        />
        <input
          type="text"
          placeholder="Sirname"
          name="apellido"
          value={apellido}
          onChange={handleApellidoInput}
          required
        />
        <input
          type="text"
          placeholder="Adress"
          name="direccion"
          value={direccion}
          onChange={handleDireccionInput}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailInput}
          required
        />
        <button className="buttonDetail" onClick={notify}>
          Realizar Compra
        </button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </div>
  );
};

export default Form;
