/*
 * @Author: iou2008 25844550@qq.com
 * @Date: 2022-10-31 14:37:51
 * @LastEditors: iou2008 25844550@qq.com
 * @LastEditTime: 2022-11-02 09:09:56
 * @FilePath: \爬虫相关e:\项目\狼\湛江实训\1031\code-shop\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "reset-css"; // 引入初始化的样式
import SlideVerify from "vue-monoplasty-slide-verify"; // 拼图验证码

// 引用公共样式
import "@/assets/css/public.less";

Vue.config.productionTip = false;

// 在Vue类中加载拼图验证码插件
Vue.use(SlideVerify);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
