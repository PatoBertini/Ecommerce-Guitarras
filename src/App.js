import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./context/CartContext";
import Form from "./Components/Cart/Form";

function App() {
  return (
    <CartProvider>
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
         <Route
          path="/form"
          element={<Form/>}
        />
        <Route path="*" element={<h1>Error 404 Element Not Found</h1>}></Route>
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
