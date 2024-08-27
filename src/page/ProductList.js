import React, { useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductList = ({category}) => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery));
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
