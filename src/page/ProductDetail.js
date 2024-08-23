import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  Select,
  SelectItem,
  Input,
  Breadcrumbs,
  BreadcrumbItem,
} from "@nextui-org/react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const goToHome=()=>{
    navigate('/shopping-project/');
  }
  const goToAll=()=>{
    navigate('/shopping-project/product')
  }

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); // 0 이하로 감소하지 않게
  };

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
    <div className="detail-box container mx-auto my-10 h-auto justify-center w-auto bg-white
    flex flex-col align-middle px-16 pt-8 pb-16 gap-8
    max-md:mx-5
    max-lg:mx-20">
      <Breadcrumbs>
        <BreadcrumbItem onClick={goToHome}>Home</BreadcrumbItem>
        <BreadcrumbItem onClick={goToAll}>All</BreadcrumbItem>
        <BreadcrumbItem>{productDetail?.title}</BreadcrumbItem>
      </Breadcrumbs>
      <div
        className="detail-box container h-auto justify-center w-auto
      flex align-middle gap-10 
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
          <div className="flex mb-3">
            {productDetail && productDetail.new ? (
              <img
                src="https://mystys2.github.io/shopping-project/assets/newIcon.png"
                width="36px"
                alt="new"
              />
            ) : (
              ""
            )}
            <div className="product-title font-semibold text-2xl">
              {productDetail?.title}
            </div>
          </div>

          <div className="font-semibold text-lg ml-2">
            ₩ {productDetail?.price}
          </div>

          <Select
            key="secondary"
            color="secondary"
            label="Size"
            placeholder="Select an size"
            className="my-4 w-full max-w-xs"
          >
            {productDetail
              ? Object.entries(productDetail.size).map((item) => (
                  <SelectItem key={item[0]}>{item[1]}</SelectItem>
                ))
              : ""}
          </Select>

          <div className="flex mx-auto my-4 gap-4 items-center w-fit">
            <Button isIconOnly size="sm" color="danger" aria-label="minus" onClick={handleDecrement}>
              <FontAwesomeIcon icon={faMinus} />
            </Button>

            <Input isReadOnly variant="bordered" value={count} className="amount-box w-10" />

            <Button isIconOnly size="sm" color="danger" aria-label="plus" onClick={handleIncrement}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>

          <div className="font-semibold text-2xl text-purple-400 bg-purple-50 rounded-lg p-2 mb-4">
            TOTAL : ₩ {productDetail?.price * count}
          </div>

          <div className="flex">
            <Button className="w-1/2 m-1" variant="ghost" color="secondary">
              장바구니
            </Button>
            <Button className="w-1/2 m-1" variant="ghost" color="secondary">
              구매하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
