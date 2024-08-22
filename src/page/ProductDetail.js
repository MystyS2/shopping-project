import React, { useState, useEffect } from "react";
import { Button, Image } from "@nextui-org/react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductDetail(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="container mx-auto grid grid-flow-col grid-cols-3 place-items-center gap-5 p-16 max-mobile-login:p-16">
      <Image
        className="col-span-1 bg-white"
        isZoomed
        height={360}
        alt="Product image"
        src={productDetail?.img}
      />
      <div className="detail-box flex flex-col col-span-2">
        <div>
          {productDetail && productDetail.new ? (
            <img
              src="https://mystys2.github.io/shopping-project/assets/newIcon.png"
              width="32px"
              alt="new"
            />
          ) : (
            ""
          )}
        </div>
        <div className="product-title">{productDetail?.title}</div>
        <div>₩ {productDetail?.price}</div>
        <div>
          {productDetail?.size}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
