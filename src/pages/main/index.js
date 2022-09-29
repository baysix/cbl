import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { newsCbl } from "../../lib/api/news";

import Header from "../../component/header";
import MainContents from "../../component/maintemplate";
import NewListTemp from "../../component/new";
import Modal from "../../component/modal";

const MainPage = () => {
  const location = useLocation();
  const [category, setCategory] = useState(location.state.category);

  useEffect(() => {
    setCategory(location.state.category);
  }, [location.state]);

  return (
    <>
      <Header />
      <MainContents>
        <NewListTemp dataReqApi={newsCbl} category={category} />
      </MainContents>
    </>
  );
};
export default MainPage;
