/*
 * @Author: iou2008 25844550@qq.com
 * @Date: 2022-11-02 08:39:33
 * @LastEditors: iou2008 25844550@qq.com
 * @LastEditTime: 2022-11-03 08:52:55
 * @FilePath: \爬虫相关e:\项目\狼\湛江实训\1102\code-shop\src\store\showModal\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  namespaced: true, // 启用空间命名
  // 当前Vuex模块的基本数据变量
  state: {
    isShowLoginModal: false, //是否显示登录模态窗口
    isShowRegModal: false, // 是否显示注册模态窗口
  },
  //  当前Vuex模块的基本方法
  mutations: {
    changeIsShowLoginModal(state, payload) {
      state.isShowLoginModal = payload;
    },
  },
  actions: {},
};
