import Vue from "vue";
import Vuex from "vuex";
// 引入自定义的Vuex模块
import showModal from "./showModal";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},

  // 设置自定义的Vuex模块
  modules: {
    showModal,
  },
});
