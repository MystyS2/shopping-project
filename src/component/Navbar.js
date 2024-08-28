import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { authenticateActions } from "../redux/reducers/authenticateReducer";


const Navbar = () => {
  const menuList = {
    hot: "Hot🔥",
    new: "New✨",
    product: "All",
    long: "Long",
    short: "Short",
    gel: "Gel",
    polish: "Polish",
    clothes: "Clothes"
  };

  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.auth.authenticate);

  const logout = (event) => {
    dispatch(authenticateActions.logout());
  };

  let [openSearchBox, setOpenSearchBox] = useState(false);
  let [mobileMenu, setMobileMenu] = useState(false);

  const searchBoxRef = useRef(null); // 검색 박스를 참조할 ref

  // 검색 박스 바깥을 클릭했을 때 상태를 변경하는 함수
  const handleClickOutside = (event) => {
    // 검색 박스 영역 밖을 클릭했는지 확인
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setOpenSearchBox(false); // 검색 박스 닫기
    }
  };
  
  // 검색 박스 바깥 클릭 감지 이벤트 추가
  useEffect(() => {
    if (openSearchBox) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // 메모리 누수 방지
    };
  }, [openSearchBox]);

  return (
    <div>
      <div className="head-container flex max-mobile-login:justify-between max-mobile-login:w-wvh gap-3 m-5">
        <FontAwesomeIcon icon={faBars} onClick={()=>setMobileMenu(true)} className="mobile-login:hidden"/>
        {mobileMenu === true
        ? <div className="mobile-login:hidden fixed left-0 top-0 bg-themecolor-main w-40 h-full z-20">
          <h1 className="font-semibold text-xl m-5 text-red-500"><FontAwesomeIcon icon={faX} onClick={()=>setMobileMenu(false)} className="w-3 mr-2 text-red-500"/>MENU</h1>
          <ul className="menu-list flex flex-col">
            {Object.entries(menuList).map((item, index) => (
              <Link to={"/shopping-project/" + item[0]} key={index} className="mx-3 text-themecolor-dark border-b-1 border-themecolor-dark">
                {item[1]}
              </Link>
            ))}
          </ul>
        </div>
        : ''}

        <div className="flex flex-row gap-3 absolute right-0 mr-3">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => {
              setOpenSearchBox(!openSearchBox);
            }}
          />

          {authenticate === true ? (
            <div>
              <FontAwesomeIcon icon={faUser} />
              <Link to="/shopping-project/" onClick={() => logout()} className="ml-3 ">로그아웃</Link>            
            </div>
          ) : (
            <Link to="/shopping-project/login">로그인</Link>
          )}

          {openSearchBox && (<div ref={searchBoxRef}><SearchBox /></div>)}
        </div>
      </div>

      <div className="flex justify-center">
        <Link to="/shopping-project/">
          <img src="https://github.com/MystyS2/shopping-project/blob/master/public/assets/logo.png?raw=true" />
        </Link>
      </div>

      <div className="flex justify-center max-mobile-login:hidden">
        <ul className="menu-list flex">
          {Object.entries(menuList).map((item, index) => (
            <Link to={"/shopping-project/" + item[0]} key={index}>
              {item[1]}
            </Link>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
