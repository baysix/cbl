import React from "react";
// import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const SubContents = () => {
  return (
    <div id="s">
      <section id="contents_inner">
        <div className="inner">
          <article>
            <h2 className="subPageTitle">뉴스</h2>
            <div className="contents_box"></div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default SubContents;
