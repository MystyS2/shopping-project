import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = ["Hot🔥", "New✨", "Short", "Long"];
  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img src="https://mystys2.github.io/shopping-project/assets/logo.png" />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </div>
      <div className="search-box">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="검색하기"/>
      </div>
    </div>
  );
};

export default Navbar;
