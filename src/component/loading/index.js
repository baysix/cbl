import React from "react";
import LoadingImg from "./img/spinN.gif";
import "./style.css";

const Loading = () => {
  return (
    <>
      <div className="lodingWrap">
        <img src={LoadingImg} alt="로딩스피너" />
      </div>
    </>
  );
};

export default React.memo(Loading);
