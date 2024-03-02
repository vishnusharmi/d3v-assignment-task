import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ProductsDetails from "./components/products/ProductsDetails";
import Home from "./pagesComp/Home";
import ProductsLists from "./components/products/ProductsLists";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/products/:id" element={<ProductDetail/>} /> */}
            <Route
              path="/ProductDetail/:productId"
              element={<ProductsDetails />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/productList" element={<ProductsLists />} />
            <Route path="Profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
