/*
 * @Author: iou2008 25844550@qq.com
 * @Date: 2022-11-02 08:39:32
 * @LastEditors: iou2008 25844550@qq.com
 * @LastEditTime: 2022-11-02 11:33:24
 * @FilePath: \爬虫相关e:\项目\狼\湛江实训\1102\code-shop\src\request\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";

const instance = axios.create({
  baseURL: "http://kumanxuan1.f3322.net:8881/cms",
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    console.log("每一次发起请求前，都会先执行这里的代码");
    // console.log(config); //config本次请求的配置信息
    console.log(config.url);
    if (config.url === "/sendSMS" || config.url === "/wechatUsers/PCLogin") {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    console.log(
      "每一次接收到响应，都会先执行这里的代码，再去执行成功的那个回调函数then"
    );
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
