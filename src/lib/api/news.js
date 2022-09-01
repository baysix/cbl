import client from "../utils";

//news 크롤링 리스트 api
export const newsCbl = (param) => client.get(`/api/board/news/listPage`, param);

//news 가지고 오고싶은 뉴스 api[c]
export const newsDetail = (param) => client.get(`/api/board/news/get/${param}`);
