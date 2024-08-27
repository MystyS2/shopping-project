import './App.css';
import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';
import HotNew from './page/HotNew';
import ProductList from './page/ProductList';

// 메인 컬러 : #9face1 하이라이트 컬러 : #ffd05c 그림자 컬러 : #5168c5 배경 컬러 : #faf4dc
function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shopping-project/' element={<Home/>} />
          <Route path='/shopping-project/login' element={<Login />} />
          <Route path='/shopping-project/product' element={<ProductAll />} />
          <Route path='/shopping-project/product/:id' element={<PrivateRoute />} />
          <Route path='/shopping-project/hot' element={<HotNew category="hot" />} />
          <Route path='/shopping-project/new' element={<HotNew category="new" />} />
          <Route path='/shopping-project/long' element={<ProductList category="long" />} />
          <Route path='/shopping-project/short' element={<ProductList category="short" />} />
          <Route path='/shopping-project/gel' element={<ProductList category="gel" />} />
          <Route path='/shopping-project/polish' element={<ProductList category="polish" />} />
          <Route path='/shopping-project/clothes' element={<ProductList category="clothes" />} />
        </Routes>
      </div>      
    </NextUIProvider>
  );
}

export default App;
