/*
 * @Author: iou2008 25844550@qq.com
 * @Date: 2022-11-02 08:39:33
 * @LastEditors: iou2008 25844550@qq.com
 * @LastEditTime: 2022-11-03 10:40:33
 * @FilePath: \爬虫相关e:\项目\狼\湛江实训\1102\code-shop\src\store\showModal\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  namespaced: true, // 启用空间命名
  // 当前Vuex模块的基本数据变量
  state: {
    loginStatus: false, // 当前用户的登录状态
    userInfo: {
      name: "",
      coin: 0,
      img: require("@/assets/img/userImg.f8bbec5e.png"),
      cartTotal: 0,
    }, // 当前用户的详细信息
  },
  //  当前Vuex模块的基本方法
  mutations: {
    // 修改用户登录状态的方法
    changeUserLoginStatus(state, payload) {
      state.loginStatus = payload;
    },

    // 修改用户详细信息的方法
    changeUserInfo(state, payload) {
      // state.userInfo = {
      //   name: "小明",
      //   coin: 999,
      //   img: "",
      // };

      // 通过回传的参数对当前用户的详细信息进行赋值
      state.userInfo.name = payload.name;
      state.userInfo.coin = payload.coin;
      state.userInfo.img = payload.img;
      state.userInfo.cartTotal = payload.cartTotal;
    },
  },
  actions: {},
};
