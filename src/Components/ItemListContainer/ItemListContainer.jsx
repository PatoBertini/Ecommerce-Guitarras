import React, { useEffect, useState } from "react";
import { guitarras } from "../../mock/guitarras";
import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setProducts] = useState([]);

  // useParams returns an object of key/value pairs of URL parameters
  const parametroURL = useParams(); // desestructuramos parametroURL
  // console.log(parametroURL);

  const { categoryName } = useParams();// muy importante usar mismo nombre que en el path de app.js 
  // console.log(categoryName);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      const prodFiltrados = guitarras.filter(
        (guitarra) => guitarra.category === categoryName
      );
      setTimeout(() => {
        res(categoryName ? prodFiltrados : guitarras);
      }, 500);
    });
    getProducts
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div className="sectionContainer">
    
      <h2>Explore Models</h2>
      <div className="itemsContainer">
        <ItemList items={items} />
      </div>
    </div>
  );
};

// ItemListContainer mediante una promesa que resuelve recibe un array y mediante una prop envia a su hijo ItemList la desestructuracion del array.

export default ItemListContainer;
