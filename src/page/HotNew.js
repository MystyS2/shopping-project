import React, { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";

const HotNew = ({ category }) => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:5000/products/`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="product-all container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        {category === 'hot' 
        ? productList.map((item, index) =>item.hot ? <ProductCard item={item} key={index} /> : "")
        : productList.map((item, index) =>item.new ? <ProductCard item={item} key={index} /> : "")}
      </div>
    </div>
  );
};

export default HotNew;
