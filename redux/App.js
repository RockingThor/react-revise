import React from "react";
import Product from "./components/Product";
import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  const productList = useSelector((state) => state.products);
  console.log(productList);
  return (
    <div className="products-container">
      {productList?.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          rating={product.rating.rate}
          price={product.price}
          imageUrl={product.image}
        />
      ))}
    </div>
  );
};

export default App;
