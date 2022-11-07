/*
 * @Author: iou2008 25844550@qq.com
 * @Date: 2022-11-02 08:39:33
 * @LastEditors: iou2008 25844550@qq.com
 * @LastEditTime: 2022-11-03 11:34:06
 * @FilePath: \爬虫相关e:\项目\狼\湛江实训\1102\code-shop\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import Vuex from "vuex";
// 引入自定义的Vuex模块
import showModal from "./showModal";
import userStatus from "./userStatus";
import showToast from "./showToast";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},

  // 设置自定义的Vuex模块
  modules: {
    showModal,
    userStatus,
    showToast,
  },
});
