import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='product-card'>
        <img src={item?.img} />
        <div>{item?.choice === true? 'Concious choice' : ''}</div>
        <div>{item?.title}</div>
        <div>₩ {item?.price}</div>
        <div>{item?.new === true ? 'NEW!' : ''}</div>
    </div>
  )
}

export default ProductCard