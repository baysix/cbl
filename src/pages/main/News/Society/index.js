import { useState } from "react";

import { useLocation } from "react-router-dom";
import { newsCbl } from "../../lib/api/news";

import Header from "../../component/header";
import MainContents from "../../component/maintemplate";
import NewListTemp from "../../component/new";

const Society = () => {
  const loaction = useLocation();

  const [category, setCategory] = useState(
    loaction ? "사회" : loaction.state.category
  );
  return (
    <>
      <Header />
      <MainContents>
        {/* <NewListTemp dataReqApi={newsCbl} category={category} /> */}
      </MainContents>
    </>
  );
};
export default Society;
