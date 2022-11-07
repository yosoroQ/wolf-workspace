import request from "./request";

// 请求精品推荐数据
export const JingpinAPI = () => request.get("/products/recommend");

// 请求热门推荐
export const HotAPI = () => request.get("/products/hot");
