import React, { useState, useEffect, useCallback } from "react";
import "./style.scss";
import "react-toastify/dist/ReactToastify.css";

const MediaMidleware = (props) => {
  const { setItemProps } = props;
  const [sourceId, setSourceId] = useState();
  const [itemSource, setItemSource] = useState([
    { sourceName: "중앙일보", sourceClass: "middleNews" },
  ]);

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
    itemSource.map((info, idx) => {
      console.log(info);
      if (info.sourceName === setItemProps.source) {
        setSourceId(info.sourceClass);
      }
    });
  }, []);

  const markup = () => {
    let contents = setItemProps.post.replaceAll("/_ir50_/", "");
    console.log(setItemProps);
    return { __html: contents };
  };
  return (
    <>
      <div id={sourceId}>
        <div className="sourceTitle">
          <h1>{setItemProps.title}</h1>
        </div>
        <div className="sourceDate">
          <span>{setItemProps.newsId}</span>
        </div>
        <div dangerouslySetInnerHTML={markup()}></div>
      </div>
    </>
  );
};
export default MediaMidleware;
