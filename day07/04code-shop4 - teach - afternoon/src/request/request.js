import axios from "axios";

const instance = axios.create({
  baseURL: "http://kumanxuan1.f3322.net:8881/cms",
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    console.log("每一次发起请求前，都会先执行这里的代码");
    console.log(config); //config本次请求的配置信息
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
