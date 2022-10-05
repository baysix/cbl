const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // 불러오려는 server 의 api path
    createProxyMiddleware({
      target: "http://3.37.23.248:8000", // server 주소를 넣어주면 된다.
      changeOrigin: true,
    })
  );
};
