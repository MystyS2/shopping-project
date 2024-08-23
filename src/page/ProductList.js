import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';

const ProductList = ({category}) => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/MystyS2/shopping-project/products/`;
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
        {productList.filter((key)=>key.category===`${category}`).map((item, index) => (<ProductCard item={item} key={index} />))}
      </div>
    </div>
  );
};

export default ProductList;
