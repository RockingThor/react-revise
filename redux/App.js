import React from "react";
import Product from "./components/Product";
import "./App.css";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  const productList = useSelector((state) => state.products);
  console.log(productList);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
