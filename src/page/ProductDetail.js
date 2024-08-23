import React, { useState, useEffect } from "react";
import { Button, Image, Select, SelectItem } from "@nextui-org/react";
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
    <div
      className="detail-box container mx-auto my-10 h-auto justify-center w-auto bg-white 
    flex align-middle gap-10 p-16 
    max-md:flex-col
    max-md:mx-5
    max-lg:mx-20"
    >
      <div className="detail-image flex justify-center">
        <Image
          className="bg-white"
          isZoomed
          height={360}
          alt="Product image"
          src={productDetail?.img}
        />
      </div>
      <div className="detail-box flex flex-col">
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
        <Select
          key="secondary"
          color="secondary"
          label="Size"
          placeholder="Select an size"
          className="max-w-xs"
        >
          {productDetail ? Object.entries(productDetail.size).map((item) => (
            <SelectItem key={item[0]}>{item[1]}</SelectItem>
          )) : ''}
        </Select>
      </div>
    </div>
  );
};

export default ProductDetail;
