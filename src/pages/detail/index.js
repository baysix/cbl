import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../component/header";
import SubContents from "../../component/subpage";

const DetailPage = () => {
  const loaction = useLocation();
  const [itemId, setItemId] = useState(loaction.state.newsId);
  return (
    <>
      <Header />
      <SubContents itemId={itemId} />
    </>
  );
};
export default DetailPage;
