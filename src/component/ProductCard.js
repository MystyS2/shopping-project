import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const goToDetail = () =>{
    navigate(`/shopping-project/product/${item.id}`);
  }
  return (
    <div className='product-card flex flex-col gap-2 cursor-pointer hover:text-themecolor-dark' onClick={goToDetail}>
        <div className='card-image'><img src={item?.img} /></div>
        <div className='flex my-1'>
          {item?.hot === true? <div className='animate-bounce text-xs rounded-md text-white bg-red-500 p-1'>🔥Hot!</div> : ''}
          {item?.new === true ? <div className='animate-bounce text-xs rounded-md text-white bg-themecolor-point p-1'>✨New!</div> : ''}
        </div>
        <div className='font-medium'>{item?.title}</div>
        <div>₩ {item?.price}</div>
    </div>
  )
}

export default ProductCard