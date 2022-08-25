// import React, { useEffect, useState } from "react";
// import { guitarras } from "../../mock/guitarras";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  return (
    <div className="gridContainer">
      <div className="topContainer">
        <h1>ACOUSTIC LOCAL</h1>
      </div>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
