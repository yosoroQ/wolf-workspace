<!--
 * @Author: iou2008 25844550@qq.com
 * @Date: 2022-11-02 08:39:32
 * @LastEditors: iou2008 25844550@qq.com
 * @LastEditTime: 2022-11-03 10:41:39
 * @FilePath: \爬虫相关e:\项目\狼\湛江实训\1102\code-shop\src\components\Topbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="topbar">
    <div class="wrap topbarWrap">
      <div class="l">欢迎来到叩丁狼积分商城</div>
      <ul class="r">
        <li>
          <img class="avatar" :src="userInfo.img" width="26" alt="" />

          用户名：{{ userInfo.name || "--" }}
        </li>
        <li>我的鸡腿：{{ userInfo.coin || "--" }}</li>
        <li>获取鸡腿</li>
        <li>叩丁狼官网</li>
        <li
          v-if="!loginStatus"
          @click="changeIsShowLoginModal(true)"
          class="login-btn"
        >
          登录
        </li>
        <li class="cart-btn" v-if="loginStatus">
          <img src="../assets/img/cart.png" alt="" />
          <span>购物车</span>
          <strong>{{ userInfo.cartTotal }}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// 引入Vuex辅助函数
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      cartTotal: 0,
    };
  },
  methods: {
    // showLoginMode() {
    //   console.log(123);
    //   // 触发父组件绑定的事件，从而实现子传父的功能
    //   this.$emit("testchange");
    // },

    // 使用辅助函数把Vuex中的方法直接调用到本组件的自定义方法中
    ...mapMutations({
      changeIsShowLoginModal: "showModal/changeIsShowLoginModal",
    }),
  },

  computed: {
    ...mapState({
      loginStatus: (state) => state.userStatus.loginStatus,
      userInfo: (state) => state.userStatus.userInfo,
    }),
  },
};
</script>

<style lang="less" scoped>
.topbar {
  height: 40px;
  line-height: 40px;
  background: #242b39;
  font-size: 14px;
  .topbarWrap {
    color: #fffefe;
    display: flex;
    justify-content: space-between;
    .r {
      li {
        float: left;
        margin-left: 20px;
        text-align: center;
        cursor: pointer;
        &.login-btn {
          width: 124px;
          height: 40px;
          background: #0a328e;
        }
      }
      .avatar {
        vertical-align: middle;
        border-radius: 50%;
      }
    }
  }
  .cart-btn {
    width: 124px;
    height: 40px;
    background: #0a328e;
    text-align: center;
    img {
      width: 20px;
      height: 19px;
      vertical-align: middle;
    }
    span {
      margin: 0 8px;
    }
    strong {
      width: 22px;
      height: 22px;
      line-height: 22px;
      display: inline-block;
      border-radius: 50%;
      background-color: #fd604d;
    }
  }
}
</style>