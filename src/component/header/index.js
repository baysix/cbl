import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="header_wrap">
        <div className="logo">
          <Link to="/" exact="true">
            <img src={logo} />
          </Link>
        </div>
        <div className="searchArea">
          <div className="searchBox">
            <input type="text" placeholder="검색어를 입력해주세요." />
            <button type="button" className="searchBtn">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="header_menu">
        <ul className="menuList">
          <li className="on">경제</li>
          <li>사회</li>
          <li>연예</li>
          <li>시사</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
