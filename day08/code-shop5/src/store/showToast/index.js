/*
 * @Author: iou2008 25844550@qq.com
 * @Date: 2022-11-02 08:39:33
 * @LastEditors: iou2008 25844550@qq.com
 * @LastEditTime: 2022-11-03 12:01:11
 * @FilePath: \爬虫相关e:\项目\狼\湛江实训\1102\code-shop\src\store\showModal\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  namespaced: true, // 启用空间命名
  // 当前Vuex模块的基本数据变量
  state: {
    isShowToast: false, //是否显示提示组件
    toastMsg: "提示内容信息",
    toastClass: ["iconfont", "icon-toast-shibai_huaban"],
  },
  //  当前Vuex模块的基本方法
  mutations: {
    changeIsShowToast(state, payload) {
      // 提示组件显示
      state.isShowToast = true;

      // 修改提示内容
      state.toastMsg = payload.msg;

      if (payload.status == "success") {
        state.toastClass[1] = "icon-toast_chenggong";
      } else if (payload.status == "error") {
        state.toastClass[1] = "icon-toast-shibai_huaban";
      }

      // 经过指定时间后，把显示变量重新设置为false
      setTimeout(() => {
        state.isShowToast = false;
      }, 3000);
    },
  },
  actions: {},
};
