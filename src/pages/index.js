import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { newsCbl } from "../../lib/api/news";

import Header from "../../component/header";
import MainContents from "../../component/maintemplate";
import NewListTemp from "../../component/new";
import Lotto from "../../component/lotto";
import Modal from "../../component/modal";
import DetailPage from "../detail";
import MainPage from "./main";

const MainT = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};
export default MainT;
