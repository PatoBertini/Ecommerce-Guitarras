import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
        <Route
          path="/detail/:idProducto"
          element={<ItemDetailContainer/>}
        />
        <Route
          path="/cart"
          element={<Cart/>}
        />
        <Route path="*" element={<h1>Error 404 Element Not Found</h1>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
