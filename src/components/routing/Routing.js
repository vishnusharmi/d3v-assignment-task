import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../authentication/Login";
import Profile from "../Profile";
import ProductsLists from "../products/ProductsLists";
import ProductsDetails from "../products/ProductsDetails";
import Home from "../../pagesComp/Home";
import Register from "../authentication/Register";

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
}
