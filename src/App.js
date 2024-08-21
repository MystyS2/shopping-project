import './App.css';
import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';

// 0. 메인 컬러 : #9face1 하이라이트 컬러 : #ffd05c 그림자 컬러 : #5168c5 배경 컬러 : #faf4dc
// 1. 전체 상품 페이지, 로그인, 상품 상세페이지
// 2. 전체 상품 페이지 : 전체 상품 목록 열람
// 3. 로그인 페이지 : 로그인 버튼 클릭 시 이동
// 4. 상품 상세 페이지 : 로그인 한 경우에만 접근 가능, 상품 상세 정보 출력
// 5. 로그인 -> 로그아웃 버튼, 로그아웃 -> 로그인 버튼 보이게
// 6. 상품 검색 기능

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/shopping-project/' element={<Home/>} />
          <Route path='/shopping-project/login' element={<Login />} />
          <Route path='/shopping-project/product' element={<ProductAll />} />
          <Route path='/shopping-project/product:id' element={<ProductDetail />} />
        </Routes>
      </div>      
    </NextUIProvider>
  );
}

export default App;
