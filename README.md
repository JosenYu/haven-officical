# havefun

## 根据 npm 打包环境配置不同的接口环境

在 util 文件夹中创建 baseURL.js

```js
let baseURL = {
  // 开发环境
  development: "",
  // 生产环境
  production: ""
};
export default baseURL[process.env.NODE_ENV];

// 封装成class
class BaseURL {
  // 构造属性
  constructor(env) {
    this.env = env;
    this.url = "";
  }
  // 构造函数
  getURL() {
    if (this.env === "development") {
      this.url = "";
    } else {
      this.url = "production";
    }
    return this.url;
  }
}
const baseURL = new BaseURL(process.env.NODE_ENV);

export default baseURL;

```

在 axios 中设置 baseURL，`axios.default.baseURL = baseURL;`

## 项目使用 proxy 跨域

在根目录下 新建 vue.config.js 文件

```js
module.exports = {
  // 配置代理跨域
  devServer: {
    proxy: {
      // 需要匹配的字符串
      "/api": {
        //代理接b
        target: "http://localhost:3000",
        // 如果时本地开发服务 需要开启跨域请求
        changeOrigin: true,
        //代理后的显示路径转化
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
```

之后的请求 url 直接写 /api

```js
axios({
  url: "/api"
});
```
