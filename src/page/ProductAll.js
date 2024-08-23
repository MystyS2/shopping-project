import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
        {productList != "" ? (
          <div className="product-all container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
          {productList.map((item, index) => (<ProductCard item={item} key={index} />))}
          </div>
        ) : (
          <div className="detail-container container mx-auto my-10 h-auto justify-center w-auto bg-white
            text-center text-xl font-semibold
            flex flex-col align-middle px-16 pt-8 pb-16 gap-8
            max-md:mx-5
            max-lg:mx-20">
            🔍검색 결과가 없습니다.
          </div>
        )}
      
    </div>
  );
};

export default ProductAll;
