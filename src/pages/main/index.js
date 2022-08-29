import { useState } from "react";

import { newsCbl } from "../../lib/api/news";

import Header from "../../component/header";
import MainContents from "../../component/maintemplate";
import NewListTemp from "../../component/new";
import Modal from "../../component/modal";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainContents>
        <NewListTemp dataReqApi={newsCbl} />
      </MainContents>
    </>
  );
};
export default MainPage;
