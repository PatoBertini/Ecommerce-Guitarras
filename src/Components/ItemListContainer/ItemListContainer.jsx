import React, { useEffect, useState } from "react";
// import { guitarras } from "../../mock/guitarras";
import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = () => {
  const [items, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useParams returns an object of key/value pairs of URL parameters
  const { parametroURL } = useParams(); // desestructuramos parametroURL
  // console.log(parametroURL);

  const { categoryName } = useParams(); // muy importante usar mismo nombre que en el path de app.js
  // console.log(categoryName);

  useEffect(() => {
    // hacer un if else para ver q prod va a cada lado
    setIsLoading(true);
    const itemCollection = collection(db, "productos");
    const q = query(itemCollection, where("category", "==", categoryName));
    getDocs(q)
      .then((resp) => {
        // console.log(resp.docs);
        // el id esta en la en la rta de la promesa
        // data()-> es un metodo de firestore para acceder  a mi array
        const products = resp.docs.map((prod) => {
          // console.log(prod.data());
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <div className="sectionContainer">
      <h2>Explore Models</h2>
      <div className="itemsContainer">
        {isLoading ? (
          <ClipLoader
          color="#000000"
          cssOverride={{
            "justify-content": "center",
            margin: "0 auto",
          }}
          size={80}
        />
        ) : (
          <ItemList items={items} />
        )}
      </div>
    </div>
  );
};

// ItemListContainer mediante una promesa que resuelve recibe un array y mediante una prop envia a su hijo ItemList la desestructuracion del array.

export default ItemListContainer;

// const getProducts = new Promise((res, rej) => {
//   const prodFiltrados = guitarras.filter(
//     (guitarra) => guitarra.category === categoryName
//   );
//   setTimeout(() => {
//     res(categoryName ? prodFiltrados : guitarras);
//   }, 500);
// });
// getProducts
//   .then((data) => {
//     setProducts(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     setIsLoading(false);
//   });

// return () => {
//   setIsLoading(true);
// };
