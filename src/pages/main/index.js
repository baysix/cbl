import { useState, useEffect } from "react";

import { matchPath, useLocation } from "react-router-dom";
import { newsCbl } from "../../lib/api/news";

import Header from "../../component/header";
import MainContents from "../../component/maintemplate";
import NewListTemp from "../../component/new";
import Lotto from "../../component/lotto";
import Modal from "../../component/modal";
import DetailPage from "../detail";

const MainPage = () => {
  const location = useLocation();
  const [category, setCategory] = useState(
    !!!location.state ? "사회" : location.state.category
  );

  useEffect(() => {
    setCategory(!!!location.state ? "사회" : location.state.category);
  }, [location.state]);

  return (
    <>
      <MainContents category={category}>
        <NewListTemp dataReqApi={newsCbl} category={category} />
      </MainContents>
    </>
  );
};
export default MainPage;
