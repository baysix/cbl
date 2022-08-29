import { useEffect, useState } from "react";
import "./style.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CloseIcon from "@mui/icons-material/Close";
import dummy from "../new/dummyData.json";
import ButtonType from "../button";

const Modal = (props) => {
  const { setModalOnOff } = props;

  const onSubmitBtn = () => {
    setModalOnOff(false);
  };

  //스크롤 막기
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <>
      <div id="modal">
        <div className="modalInner">
          <div className="modal">
            <div className="modalHeader">
              <div className="modalClose" onClick={onSubmitBtn}>
                <CloseIcon fontSize="large" />
              </div>
            </div>
            <div className="modalContent">{props.children}</div>
            <div className="modalFooter">
              <ButtonType />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
