import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import "./ItemDetail.css";
import { db } from "../../firebase/firebaseConfig";
import { getDoc, doc, collection } from "firebase/firestore";
import ClipLoader from "react-spinners/ClipLoader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { idProducto } = useParams(); // muy importante usar mismo nombre que en el path de app.js
  // console.log(idProducto);
  // const idProdNumerico = Number(idProducto);
  // console.log(idProdNumerico);

  useEffect(() => {
    setLoading(true);

    const itemCollection = collection(db, "productos");
    const ref = doc(itemCollection, idProducto);
    getDoc(ref)
      .then((res) => {
        // console.log(res);
        // console.log(res.data());
        setProduct({ id: res.id, ...res.data() });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idProducto]);

  // console.log(product);
  return (
    <div className="probando">
      {loading ? (
        <ClipLoader
          color="#000000"
          cssOverride={{
            "justify-content": "center",
            margin: "0 auto",
          }}
          size={80}
        />
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;

// debe mostar un producto
// hacer una promesa que reciba el producto y pasarlo por prop al hijo

// const getItem = () =>
// new Promise((res, rej) => {
//   const prodVisible = guitarras.find(
//     (prod) => prod.id === idProdNumerico
//   );
//   // console.log(prodVisible);
//   setTimeout(() => {
//     res(prodVisible);
//   }, 1000);
// });

// getItem()
// .then((data) => {
//   setProduct(data);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   setIsLoading(false);
// });
