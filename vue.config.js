module.exports = {
  // 配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", //代理接口
        changeOrigin: true
      }
    }
  }
};
