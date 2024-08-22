import React from 'react';
import ProductDetail from '../page/ProductDetail';
import New from '../page/New';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({authenticate, type}) => {
  return (
    authenticate? <ProductDetail />:<New />
  )
}

export default PrivateRoute