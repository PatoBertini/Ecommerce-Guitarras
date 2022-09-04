import React from "react";
import Item from "./Item/Item";

const ItemList = ({ items }) => {
  
  return (
    <>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </>
  );
};


// ItemList mapea el array recibido y mediante las props le envia al hijo cada objeto del array para que lo pinte.
export default ItemList;
