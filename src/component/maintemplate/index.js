import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import SearchIcon from "@mui/icons-material/Search";

const MainContents = (props) => {
  const { category, children } = props;
  return (
    <div id="contents">
      <section id="contents_inner">
        <div className="inner">
          <article>
            <h2 className="subPageTitle">{category}</h2>
            <div className="contents_box">{children}</div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default MainContents;
