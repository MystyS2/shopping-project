import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";

const Navbar = ({authenticate}) => {
  const menuList = {
    hot: "Hot🔥",
    new: "New✨",
    product: "All",
    long: "Long",
    short: "Short",
    gel: "Gel",
    polish: "Polish",
  };

  let [OpensearchBox, SetOpenSearchBox] = useState(false);

  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={()=>{SetOpenSearchBox(!OpensearchBox);}}/>
        { authenticate === true
        ? <FontAwesomeIcon icon={faUser} />
        : <Link to="/shopping-project/login">로그인</Link>}
        {OpensearchBox && <SearchBox />}
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
