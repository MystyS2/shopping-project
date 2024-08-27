import React, { useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      {productList != "" ? (
        <div className="product-all container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
          {productList.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      ) : (
        <div
          className="detail-container container mx-auto my-10 h-auto justify-center w-auto bg-white
            text-center text-xl font-semibold
            flex flex-col align-middle px-16 pt-8 pb-16 gap-8
            max-md:mx-5
            max-lg:mx-20"
        >
          🔍검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
};

export default ProductAll;
