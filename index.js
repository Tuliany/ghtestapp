const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const { createProxyMiddleware } = require("http-proxy-middleware");
app.use(
  "/",
  createProxyMiddleware({
    target: "https://gotlandshem.euwest01.umbraco.io/", //original url
    changeOrigin: true,
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    },
  })
);
app.listen(7000);
