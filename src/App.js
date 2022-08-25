import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Classic from "./Components/Guitars/Classic/Classic";
import Acoustic from "./Components/Guitars/Acoustic/Acoustic";
import Electric from "./Components/Guitars/Electric/Electric";
import Parts from "./Components/Guitars/Parts/Parts";
import Accesories from "./Components/Guitars/Accessories/Accesories";
import Offers from "./Components/Guitars/Offers/Offers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/classic' element={<Classic/>}/>
          <Route path='/acoustic' element={<Acoustic/>}/>
          <Route path='/electric' element={<Electric/>}/>
          <Route path='/parts' element={<Parts/>}/>
          <Route path='/accessories' element={<Accesories/>}/>
          <Route path='/offers' element={<Offers/>}/>


        </Route>
        <Route path="*" element={<h1>Error 404 Element Not Found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
