import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="container mx-auto grid grid-cols-4">
        {productList.map((item, index) => (
          <ProductCard item={item} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default ProductAll;
