import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const goToDetail = () =>{
    navigate(`/shopping-project/product/${item.id}`);
  }
  return (
    <div className='product-card' onClick={goToDetail}>
        <div className='card-image'><img src={item?.img} /></div>
        <div>{item?.hot === true? '🔥Hot!' : ''}</div>
        <div>{item?.title}</div>
        <div>₩ {item?.price}</div>
        <div>{item?.new === true ? '✨New!' : ''}</div>
    </div>
  )
}

export default ProductCard