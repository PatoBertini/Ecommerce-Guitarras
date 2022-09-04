import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { guitarras } from "../../mock/guitarras";
import "./ItemDetail.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const { idProducto } = useParams(); // muy importante usar mismo nombre que en el path de app.js 
  // console.log(idProducto);
  const idProdNumerico = Number(idProducto);
  // console.log(idProdNumerico);

  useEffect(() => {
    const getItem = () =>
      new Promise((res, rej) => {
        const prodVisible = guitarras.find(
          (id) => id.guitarras === idProdNumerico
        );
        setTimeout(() => {
          res(prodVisible);
        }, 1000);
      });

    getItem()
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idProdNumerico]);

  return (
    <div>
      <h1>ItemDetailContainer</h1>

      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;

// debe mostar un producto
// hacer una promesa que reciba el producto y pasarlo por prop al hijo
