import React, { useState, useEffect, useCallback } from "react";
import "./style.scss";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const ButtonType = (props) => {
  const { setUseId } = props;
  const [newsId, setNewsId] = useState(setUseId);
  // source

  useEffect(() => {
    document
      .querySelectorAll(".button")
      .forEach(
        (button) =>
          (button.innerHTML =
            "<div><span>" +
            button.textContent.trim().split("").join("</span><span>") +
            "</span></div>")
      );
  }, []);

  return (
    <>
      <div id="buttonWrap">
        <Link to={`/detail`} state={{ newsId: newsId }}>
          <div className="button reverse customBtn">본문 바로가기</div>
        </Link>
      </div>
    </>
  );
};
export default ButtonType;
