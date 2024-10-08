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
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  let { id } = useParams();
  const [count, setCount] = useState(0);
  const productDetail = useSelector((state) => state.product.detail);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const getProductDetail = () => {
    dispatch(productAction.getDetails(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="detail-container container mx-auto my-10 h-auto justify-center w-auto bg-white
    flex flex-col align-middle px-16 pt-8 pb-16 gap-8
    max-md:mx-5
    max-lg:mx-20">
      <Breadcrumbs>
        <BreadcrumbItem onClick={goToHome}>Home</BreadcrumbItem>
        <BreadcrumbItem onClick={goToAll}>All</BreadcrumbItem>
        <BreadcrumbItem>{productDetail?.title}</BreadcrumbItem>
      </Breadcrumbs>
      <div
        className="container h-auto justify-center w-auto
        flex align-middle gap-10 
        max-md:flex-col
        max-md:mx-5
        max-lg:mx-20"
      >
        <div className="flex justify-center">
          <Image
            className="bg-white"
            isZoomed
            height={360}
            alt="Product image"
            src={productDetail?.img}
          />
        </div>
        <div className="flex flex-col w-3/5 max-md:w-full">
          <div className="flex mb-3">
            {productDetail && productDetail.new 
              ? (<img
                src="https://github.com/MystyS2/shopping-project/blob/master/public/assets/newIcon.png?raw=true"
                alt="new"
                className="h-9"
              />) 
              : ("")}
            <div className="product-title font-semibold text-2xl">
              {productDetail?.title}
            </div>
          </div>

          <div className="font-semibold text-lg ml-2">
            ₩ {productDetail?.price}
          </div>

          {productDetail?.hasOwnProperty('size')
          ? <Select
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
          :''}

          {productDetail?.hasOwnProperty('colors')
          ? <Select
              key="secondary"
              color="secondary"
              label="Colors"
              placeholder="Select an color"
              className="my-4 w-full max-w-xs"
            >
              {productDetail
                ? Object.entries(productDetail.colors).map((item) => (
                    <SelectItem key={item[0]}>{item[1]}</SelectItem>
                  ))
                : ""}
            </Select>
          :''}


          <div className="flex mx-auto my-4 gap-4 items-center w-fit">
            <Button isIconOnly size="sm" color="secondary" aria-label="minus" onClick={handleDecrement}>
              <FontAwesomeIcon icon={faMinus} />
            </Button>

            <Input isReadOnly variant="bordered" value={count} className="amount-box w-10" />

            <Button isIconOnly size="sm" color="secondary" aria-label="plus" onClick={handleIncrement}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>

          <div className="font-semibold text-2xl text-purple-400 bg-purple-50 rounded-lg p-2 mb-4">
            TOTAL : ₩ {productDetail?.price * count}
          </div>

          <div className="flex">
            <Button className="w-1/2 m-1" variant="ghost" color="secondary">
              Add to Cart
            </Button>
            <Button className="w-1/2 m-1" variant="ghost" color="danger">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
