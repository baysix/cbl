import React, { useState, useEffect, useCallback } from "react";
import "./style.scss";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation } from "react-router-dom";
import DetailPage from "../../pages/detail";

const ButtonType = (props) => {
  const { setUseId } = props;
  const [newsId, setNewsId] = useState(setUseId);

  const location = useLocation();
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
  console.log(location);
  return (
    <>
      <div id="buttonWrap">
        <Link to={`${location.pathname}/${newsId}`} state={{ newsId: newsId }}>
          <div className="button reverse customBtn">본문 바로가기</div>
        </Link>
      </div>
    </>
  );
};
export default ButtonType;
