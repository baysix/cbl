import React, { useState, useEffect, useCallback } from "react";
import "./style.scss";
import "react-toastify/dist/ReactToastify.css";

const ButtonType = (props) => {
  const { setItemProps } = props;

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
        <div className="button reverse customBtn">본문 바로가기</div>
      </div>
    </>
  );
};
export default ButtonType;
