import client from "../utils";

export const newsCbl = (param) => client.get(`/api/board/news/listPage`, param);
