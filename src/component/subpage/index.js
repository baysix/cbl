import React, { useState, useEffect } from "react";
import "./style.css";
import { newsDetail } from "../../lib/api/news";
import MediaMidleware from "../media";

import { ToastContainer, toast } from "react-toastify";
import Lotto from "../lotto";

const SubContents = (props) => {
  const { itemId } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  const [itemProps, setItemProps] = useState();

  /**
   * @param itemId
   * news 데이터 받아오는 api 함수
   */
  const fetchNewsItem = async () => {
    setIsLoaded(true);
    await newsDetail(itemId)
      .then((response) => {
        const { data } = response.data;
        setItemProps(data);
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
  };

  useEffect(() => {
    fetchNewsItem();
  }, []);

  return (
    <div id="subContent">
      <section id="subContent_inner">
        <article className="contentsBox">
          <div className="leftBox">
            {itemProps ? <MediaMidleware setItemProps={itemProps} /> : ""}
          </div>
          <div className="rightBox">
            <Lotto />
          </div>
        </article>
      </section>
    </div>
  );
};

export default SubContents;
