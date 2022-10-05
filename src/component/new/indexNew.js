import React, { useState, useEffect, useCallback } from "react";
import dummy from "./dummyData.json";
import "./style.css";
import Modal from "../modal";
import qs from "qs";

import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../loading";
import MediaMidleware from "../media";

const NewListTemp = (props) => {
  const { dataReqApi = (f) => f, category } = props;
  const initParam = {
    index: "0",
    size: "25",
    sortProperties: "regDate;desc",
  };
  const [initParams, setinitParams] = useState(initParam);
  const [modalOnOff, setModalOnOff] = useState(false);
  const [useId, setUseId] = useState();
  const [itemProps, setItemProps] = useState();
  const [selectCategory, setSelectCategory] = useState(category);
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([]);

  useEffect(() => {
    setSelectCategory(category);
  }, [category]);

  useEffect(() => {
    fetchProductItems();
  }, [selectCategory]);

  const fetchProductItems = async () => {
    setIsLoaded(true);
    await dataReqApi({
      params: {
        ...initParams,
        select: "category;" + selectCategory,
      },
    })
      .then((response) => {
        const { data } = response.data;
        setItemLists(data.list);
      })
      .catch((error) => {
        // setTotalStatus('error');
        // error 코드 작성
        toast.error("news Api 에러입니다.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
        });
      })
      .finally(() => {});
    setIsLoaded(false);
    // ...
  };
  /**
   * 모달 열기 닫기
   */
  const handleModal = (data) => {
    setItemProps(data);
    setUseId(data.newsId);
    setModalOnOff(true);
  };

  /**
   * 크롤링 기사 생성 함수
   * @returns 기사 뉴스
   */
  const rendering = () => {
    const result = itemLists.map((info, index) => (
      <li
        className="listItem"
        key={index}
        onClick={() => {
          handleModal(info);
        }}
      >
        <div id="newsWrap">
          <div className="newsInner">
            <div className="newsImg">
              <img src={info.imgUrl} />
            </div>
            <div className="newsText">
              <p className="title">{info.title}</p>
              <p className="desc">
                <span>{info.source}</span> <span>{info.newsDate}</span>
              </p>
            </div>
          </div>
        </div>
      </li>
    ));

    return result;
  };

  return (
    <>
      <div className="newsList">
        <ul className="newsListBox">{rendering()}</ul>
      </div>
      {modalOnOff && (
        <Modal setModalOnOff={setModalOnOff} setUseId={useId}>
          <MediaMidleware setItemProps={itemProps} />
        </Modal>
      )}
      <div ref={setTarget} className="Target-Element">
        {isLoaded && <Loading />}
      </div>
      <ToastContainer />
    </>
  );
};
export default NewListTemp;
