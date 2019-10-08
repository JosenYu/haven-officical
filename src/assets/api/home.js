import axios from "axios";
import baseURL from "@/assets/util/baseURL";
const BASE_URL = baseURL.getURL();
axios.defaults.baseURL = BASE_URL;

class GetResources {
  constructor() {}
  // 获取图片
  getImg() {
    axios({
      url: "/api/getResources"
    })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
let getRes = new GetResources();

export default getRes;
