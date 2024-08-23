import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";

const Navbar = ({ authenticate }) => {
  const menuList = {
    hot: "Hot🔥",
    new: "New✨",
    product: "All",
    long: "Long",
    short: "Short",
    gel: "Gel",
    polish: "Polish",
  };

  let [openSearchBox, setOpenSearchBox] = useState(false);

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
      <div className="head-container">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={() => {
            setOpenSearchBox(!openSearchBox);
          }}
        />

        {authenticate === true ? (
          <FontAwesomeIcon icon={faUser} />
        ) : (
          <Link to="/shopping-project/login">로그인</Link>
        )}

        {openSearchBox && (<div ref={searchBoxRef}><SearchBox /></div>)}
      </div>

      <div className="nav-section">
        <Link to="/shopping-project/">
          <img src="https://mystys2.github.io/shopping-project/assets/logo.png" />
        </Link>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
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
