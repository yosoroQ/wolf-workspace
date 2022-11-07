export default {
  namespaced: true, // 启用空间命名
  // 当前Vuex模块的基本数据变量
  state: {
    isShowLoginModal: false, //是否显示登录模态窗口
  },
  //  当前Vuex模块的基本方法
  mutations: {
    changeIsShowLoginModal(state, payload) {
      state.isShowLoginModal = payload;
    },
  },
  actions: {},
};
