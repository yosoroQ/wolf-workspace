import request from "./request";

import qs from "qs";

// 请求精品推荐数据
export const JingpinAPI = () => request.get("/products/recommend");

// 请求热门推荐
export const HotAPI = () => request.get("/products/hot");

// 发送短信验证码请求
export const SendSMSAPI = (params) =>
  request.post("/sendSMS", qs.stringify(params)); // 由于服务的要求，需要把参数进行格式化
