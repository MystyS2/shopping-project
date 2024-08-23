import React from 'react';
import ProductDetail from '../page/ProductDetail';
import New from '../page/New';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({authenticate, type}) => {
  return (
    authenticate == true ? <ProductDetail /> : <Navigate to="/shopping-project/login" />
  )
}

export default PrivateRoute