import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { db } from '../../firebase/firebaseConfig';
import "../Cart/cart.css";
import './form.css'

const Form = ({ cart, calculateCart, clearCart, handleId }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      buyer: { nombre, apellido, email },
      items: cart,
      total: calculateCart,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
    .then((res)=>{
      handleId(res.id)
      clearCart()
      // updateProd()
    })
  };

  // const updateProd = ()=>{
  //   const orderDoc = doc(db,'orders',)
  // }

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
        />
        <input
          type="text"
          placeholder="Sirname"
          name="apellido"
          value={apellido}
          onChange={handleApellidoInput}
        />
        <input
          type="text"
          placeholder="Adress"
          name="direccion"
          value={direccion}
          onChange={handleDireccionInput}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailInput}
        />
        <button>Realizar Compra</button>
      </form>
    </div>
  );
};

export default Form;
