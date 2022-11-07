<template>
  <div v-if="isShowLoginModal" class="modal">
    <div class="mask" @click.self="changeIsShowLoginModal(false)"></div>
    <div class="loginBox">
      <div class="close" @click="changeIsShowLoginModal(false)"></div>
      <section class="nav">
        <a
          href="#"
          :class="{ active: isShowContent }"
          @click="isShowContent = true"
          >手机号码登录</a
        >
        |
        <a
          href="#"
          :class="{ active: !isShowContent }"
          @click="isShowContent = false"
          >微信扫码登录</a
        >
      </section>
      <div class="content">
        <!-- 手机号码登录 -->
        <div v-show="isShowContent" class="phoneLogin">
          <div class="phoneLogin" v-show="isShowContent">
            <div class="row">
              <input type="text" class="ipt" placeholder="请输入手机号" />
            </div>
            <div class="row">
              <input type="text" class="ipt" placeholder="向右滑动" />
            </div>
            <div class="row">
              <input type="text" class="ipt" placeholder="请输入短信验证码" />
              <button class="btnCode">获取验证码</button>
            </div>
            <div class="row">
              <button class="btnLogin">登录</button>
            </div>
          </div>
        </div>
        <!-- 微信二维码登录 -->
        <div v-show="!isShowContent" class="qrLogin">微信二维码登录</div>
      </div>
    </div>
  </div>
</template>
<script>
// 引用Vuex的辅助函数
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      isShowContent: true, // 定义用于显示手机还是微信登录框的变量，true时显手机登录
    };
  },
  // 为了能够同步Vuex的值的变化，所以我们应该把Vuex的值返回在计算属性中
  computed: {
    ...mapState({
      isShowLoginModal: (state) => state.showModal.isShowLoginModal,
    }),
  },

  methods: {
    ...mapMutations({
      changeIsShowLoginModal: "showModal/changeIsShowLoginModal",
    }),
  },
};
</script>
<style lang="less" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .loginBox {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 555px;
    height: 423px;
    background: url("../assets/img/login-box-bg.png");
    .nav {
      display: flex;
      justify-content: center;
      font-size: 20px;
      padding-top: 50px;
      a {
        padding: 0 10px;
        color: #999;
        text-decoration: none;
        &.active {
          color: #333;
        }
      }
    }
    .content {
      width: 355px;
      margin: 20px auto 0;
      height: 200px;
      .phoneLogin {
        .row {
          display: flex;
          margin-bottom: 20px;
        }
        .ipt {
          box-shadow: 0;
          flex: 1;
          height: 48px;
        }
        .btn {
          color: #fff;
          background-color: #0a328e;
          border: none;
          cursor: pointer;
        }
        .btnCode {
          margin-left: 10px;
          line-height: 50px;
          width: 100px;
          text-align: center;
        }
        .btnLogin {
          width: 100%;
          height: 50px;
          line-height: 50px;
        }
      }
    }
    .close {
      position: absolute;
      right: 60px;
      top: 16px;
      height: 22px;
      width: 22px;
      background: url("../assets/img/close.png");
    }
  }
}
</style>

  
