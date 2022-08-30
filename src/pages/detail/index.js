import { useState } from "react";

import { newsCbl } from "../../lib/api/news";

import Header from "../../component/header";
import SubContents from "../../component/subpage";
import NewListTemp from "../../component/new";
import Modal from "../../component/modal";

const DetailPage = () => {
  return (
    <>
      <Header />
      <SubContents />
    </>
  );
};
export default DetailPage;
