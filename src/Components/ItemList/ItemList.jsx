import React from "react";
import Item from "../Item/Item";
import { guitarras } from "../../mock/guitarras";
import { useState, useEffect } from "react";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(guitarras);
      }, 2000);
    });
    getProducts
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            nombre={product.nombre}
            precio={product.precio}
            img={product.img}
          />
        );
      })}
    </>
  );
};

export default ItemList;
