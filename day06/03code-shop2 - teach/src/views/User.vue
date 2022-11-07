<template>
  <div class="person_page">
    <div class="person wrap">
      <Crumb :nav="[{name:'首页'},{name:'个人中心'}]"></Crumb>
      <main>
        <aside>
          <div class="avatar" :style="{ backgroundImage: `url(${userInfo.headImg})` }"></div>
          <div class="name">
            {{ userInfo.nickName }}
            <span @click="loginOutFn" style="cursor:pointer;">[退出]</span>
          </div>
          <div class="title">
            <img src="../assets/img/transaction.png" width="20" alt="交易管理" />
            交易管理
          </div>
          <ul class="list">
            <li :class="/\/person1/g.test($route.path) ? 'active' : ''">个人中心</li>
            <li :class="/\/person1/g.test($route.path) ? 'active' : ''">我的订单</li>
            <li :class="/\/cart/g.test($route.path) ? 'active' : ''">购物车</li>
            <li :class="/\/person1/g.test($route.path) ? 'active' : ''">消息通知</li>
            <li :class="/\/person1/g.test($route.path) ? 'active' : ''">积分明细</li>
            <li :class="/\/person1/g.test($route.path) ? 'active' : ''">积分攻略</li>
          </ul>
          <div class="title">
            <img src="../assets/img/transaction.png" width="20" alt="交易管理" />
            个人信息管理
          </div>
          <ul class="list">
            <li>地址管理</li>
            <li>账号安全</li>
          </ul>
        </aside>
        <article>
          <router-view></router-view>
        </article>
      </main>
    </div>
  </div>
</template>
<script>
import Crumb from "@/components/Crumb.vue";

import store from "@/store";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Crumb
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo.userInfo
    })
  },
  methods: {
    loginOutFn() {
      localStorage.removeItem("x-auth-token");
      setTimeout(() => {
        this.$router.push("/home");
      }, 2000);
    }
  },
  beforeRouteEnter(to, from, next) {
    //组件渲染之前执行。 this.
    console.log("beforeRouteEnter");
    let token = localStorage.getItem("x-auth-token");
    if (token) {
      next(); //显示组件
    } else {
      store.dispatch("showToast/asyncIsShowToast", {
        show: true,
        msg: "请先登录",
        type: "danger"
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/public.less";
.person_page {
  background: #fff;
  main {
    border-top: 1px solid #e1e1e1;
    padding: 28px 0 48px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    aside {
      width: 200px;
      height: 740px;
      background: #e7e7e7;
      margin-right: 60px;
      box-sizing: border-box;
      padding: 30px 18px 0;
      .avatar {
        width: 100px;
        height: 100px;
        margin: auto;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .name {
        text-align: center;
        margin-top: 19px;
        margin-bottom: 43px;
        span {
          text-decoration: underline;
          color: #2a5df1;
        }
      }
      .title {
        font-size: 16px;
        color: #333333;
        display: flex;
        align-items: center;
        margin-bottom: 14px;
        img {
          margin-right: 6px;
        }
      }
      .list {
        li {
          margin-bottom: 17px;
          font-weight: 300;
          color: #666666;
          cursor: pointer;
          &.active {
            color: @base-color;
            font-weight: bold;
            &::before {
              width: 2px;
              height: 14px;
              background: @base-color;
              display: inline-block;
              content: "";
              margin-right: 10px;
            }
          }
        }
      }
    }
    article {
      flex: 1;
      padding: 20px 0 0 0px;
      box-sizing: border-box;
      background: #fff;
    }
  }
}
</style>