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


  useEffect(() => {
    setLoading(true);

    const itemCollection = collection(db, "productos");
    const ref = doc(itemCollection, idProducto);
    getDoc(ref)
      .then((res) => {
        setProduct({ id: res.id, ...res.data() });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idProducto]);


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


