// 根据不同的 npm 打包环境配置不同的环境
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
