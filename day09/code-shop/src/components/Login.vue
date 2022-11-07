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
              <input
                type="text"
                v-model.trim="phoneNumber"
                class="ipt"
                placeholder="请输入手机号"
                ref="phone"
              />
            </div>
            <div class="row">
              <slide-verify
                :l="42"
                :r="20"
                :w="362"
                :h="140"
                :imgs="imgs"
                @success="onSuccess"
                @fail="onFail"
                @refresh="onRefresh"
                :style="{ width: '100%' }"
                class="slide-box"
                ref="slideBlock"
                :slider-text="msg"
              ></slide-verify>
            </div>
            <div class="row">
              <input
                type="text"
                v-model="checkCode"
                class="ipt"
                placeholder="请输入短信验证码"
              />
              <div class="btn btnCode" :class="{ hasCount: isShowCount }">
                <span v-show="!isShowCount" @click="getCode">获取验证码</span>
                <span v-show="isShowCount">{{ count }} s</span>
              </div>
            </div>
            <div class="row">
              <button class="btnLogin" @click="submitFun">登录</button>
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

// 引用需要用到的接口方法
import { SendSMSAPI } from "@/request/api";

export default {
  data() {
    return {
      isShowContent: true, // 定义用于显示手机还是微信登录框的变量，true时显手机登录
      phoneNumber: "18665622545", // 用户输入的手机号
      checkCode: "", //用户输入的验证码
      msg: "向右滑动", // 拼图验证提示信息
      checkImgStatus: false, // 用户当前图片验证状态
      isShowCount: false, // 显示倒计时的变量
      count: 60, // 验证短信有效倒计时的变量
      isLogin: false, // 当前用户的登录
      imgs: [
        require("@/assets/img/verify/1.jpeg"),
        require("@/assets/img/verify/2.jpeg"),
        require("@/assets/img/verify/3.jpeg"),
        require("@/assets/img/verify/4.jpeg"),
      ],
      // 模拟用户登录的数据
      users: [
        {
          phone: 18665622545,
          code: 1234,
          info: {
            name: "小明",
            coin: 999,
            img: require("@/assets/img/user/1.jpeg"),
            cartTotal: 10,
          },
        },
        {
          phone: 18665622544,
          code: 1234,
          info: {
            name: "小白",
            coin: 50,
            img: require("@/assets/img/user/2.jpeg"),
            cartTotal: 8,
          },
        },
        {
          phone: 18665622546,
          code: 4321,
          info: {
            name: "小绿",
            coin: 666,
            img: require("@/assets/img/user/3.jpeg"),
            cartTotal: 2,
          },
        },
      ],
    };
  },
  // 为了能够同步Vuex的值的变化，所以我们应该把Vuex的值返回在计算属性中
  computed: {
    ...mapState({
      isShowLoginModal: (state) => state.showModal.isShowLoginModal,
      loginStatus: (state) => state.userStatus.loginStatus,
    }),
  },

  methods: {
    ...mapMutations({
      // 用于修改登录模态框显示状态的方法
      changeIsShowLoginModal: "showModal/changeIsShowLoginModal",
      // 用于修改登录状态的方法
      changeUserLoginStatus: "userStatus/changeUserLoginStatus",

      // 用于修改详细信息方法
      changeUserInfo: "userStatus/changeUserInfo",
    }),
    // 对于拼图验证插件不同状态后调用的方法
    // 拼图成功
    onSuccess(times) {
      let ms = (times / 1000).toFixed(1);
      this.msg = "login success, 耗时 " + ms + "s";

      this.checkImgStatus = true;
      // alert("成功");
    },
    // 拼图失败
    onFail() {
      // alert("失败");
      this.checkImgStatus = false;
      this.onRefresh(); // 重新刷新拼图
    },
    // 拼图刷新
    onRefresh() {
      this.checkImgStatus = false;
      this.msg = "再试一次";
    },
    // 用于验证码有效时间倒计时的方法
    countdown() {
      // 1. 显示倒计时的组件
      this.isShowCount = true;
      // 2. 进行倒计时
      // 2.1 初始化显示的时间
      this.count = 5;

      // 2.2 每隔一秒，显示时间减1
      let timer = setInterval(() => {
        this.count -= 1;
        // 2.2.3 如果计时已经等于或小于0则有效时间已经超过
        if (this.count <= 0) {
          this.count = 60;
          // 停止倒计时
          clearInterval(timer);
          // 把显示变量修改
          this.isShowCount = false;
        }
      }, 1000);
    },
    // 获取手机验证码的方法
    async getCode() {
      console.log(this.phoneNumber);
      // 判断当前是否显示的是发送验证码的按钮
      // if (this.isShowCount) {
      //   return false;
      // }

      // 1. 首先验证用户输入的手机号码格式是否正确
      let reg =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      // 1.1 用户输入格式错误的手机号，则返回false
      if (!reg.test(this.phoneNumber)) {
        alert("请输入正确的手机号");
        // 如果输入不正确，给选中手机号输入框
        this.$refs.phone.focus();
        return false;
      }

      // 2. 再验证用户是否通过图片验证
      if (!this.checkImgStatus) {
        alert("对不起，你未通过图片验证，请通过后再操作");
        // 对图片验证进行刷新
        this.onRefresh();
        return false;
      }

      // 调用短信发送接口，进行验证码有效时间的倒计时
      console.log(this.phoneNumber);
      let res = await SendSMSAPI(this.phoneNumber);

      console.log(res);

      this.countdown();
    },

    // 用户手机登录方法
    submitFun() {
      // 判断用户是否通过图片验证
      if (!this.checkImgStatus) {
        alert("对不起，你未通过图片验证，请通过后再操作");
        return false;
      }
      // alert("进行登录");

      // 使用模拟数据进行登录
      this.users.forEach((user) => {
        if (user.phone == this.phoneNumber && user.code == this.checkCode) {
          alert("登录成功");
          // 关闭模态框
          this.changeIsShowLoginModal(false);
          // this.isLogin = true;

          // 如果登录成功，就改变Vuex中的用户登录状态
          this.changeUserLoginStatus(true);

          // 修改用户的详细信息
          this.changeUserInfo(user.info);
        }
      });

      if (!this.loginStatus) {
        alert("手号或验证码不正确，请检查");
      }
    },
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
      /deep/.slide-box {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        canvas {
          position: absolute;
          left: 0;
          top: -120px;
          display: none;
          width: 100%;
          box-sizing: border-box;
        }
        .slide-verify-block {
          width: 85px;
          height: 136px;
        }
        .slide-verify-refresh-icon {
          top: -120px;
          display: none;
        }
        &:hover {
          canvas {
            display: block;
          }
          .slide-verify-refresh-icon {
            display: block;
          }
        }
      }
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

  
