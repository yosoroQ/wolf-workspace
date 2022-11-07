<template>
  <div class="topbar">
    <div class="wrap topbarWrap">
      <div class="l">欢迎来到叩丁狼积分商城</div>
      <ul class="r">
        <li>
          <img
            class="avatar"
            src="../assets/img/userImg.f8bbec5e.png"
            width="26"
            alt=""
          />
          用户名：--
        </li>
        <li>我的鸡腿：--</li>
        <li>获取鸡腿</li>
        <li>叩丁狼官网</li>
        <li @click="changeIsShowLoginModal(true)" class="login-btn">登录</li>
      </ul>
    </div>
  </div>
</template>
<script>
// 引入Vuex辅助函数
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
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
}
</style>