<template>
  <div id="app">
    <Topbar @testchange="changeLoginShow"></Topbar>
    <Header></Header>
    <Login></Login>
    <!-- <button @click="showToastFun">显示/隐藏提示</button> -->
    <!-- 视图组件 -->
    <router-view />

    <!-- <Test></Test> -->
    <!-- <h1>精品推荐</h1>
    <ul>
      <li v-for="goods in goodsList">
        商品名：{{ goods.name }}
        <img
          width="100"
          :src="'http://www.wolfcode.cn/' + goods.coverImg"
          alt=""
        />
        所需要积分：{{ goods.coin }}
      </li>
    </ul>

    <h1>热门推荐</h1>
    <ul>
      <li v-for="goods in hotList">
        商品名：{{ goods.name }}
        <img
          width="100"
          :src="'http://www.wolfcode.cn/' + goods.coverImg"
          alt=""
        />
        所需要积分：{{ goods.coin }}
      </li>
    </ul> -->

    <Footer></Footer>

    <!-- 提示信息组件 -->
    <transition name="slide">
      <Toast v-show="isShowToast"></Toast>
    </transition>
  </div>
</template>

<script>
// 当前组件引用子组件
import Header from "@/components/Header";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import Login from "@/components/Login";
import Test from "@/components/Test";
import Toast from "@/components/Toast.vue";

// import axios from "axios";
import { JingpinAPI, HotAPI } from "@/request/api";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Header,
    Topbar,
    Footer,
    Login,
    Toast,
    Test,
  },
  data() {
    return {
      // isShowToast: true,
      goodsList: [
        // { name: "小明的肥皂", img: "XX", coin: 55 },
        // { name: "小明的肥皂1", img: "XX", coin: 55 },
        // { name: "小明的肥皂2", img: "XX", coin: 55 },
      ],
      hotList: [],
    };
  },
  computed: {
    ...mapState({
      isShowToast: (state) => state.showToast.isShowToast,
    }),
  },
  methods: {
    changeLoginShow() {
      // alert("这里需要修改登录框显示状态");
      this.showLogin = true;
    },
    ...mapMutations({
      // 用于修改登录模态框显示状态的方法
      changeIsShowToast: "showToast/changeIsShowToast",
    }),
    showToastFun() {
      this.changeIsShowToast(true);
    },
  },
  // 生命周期函数
  async created() {
    console.log("应用创建后");
    // let that = this;
    // axios
    //   .get("http://kumanxuan1.f3322.net:8881/cms/products/recommend")
    //   .then((res) => {
    //     console.log(res.data);
    //     that.goodsList = res.data.data.data.records;
    //     console.log(that.goodsList);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // let res = await JingpinAPI(); // 精品推荐的数据

    // let hotRes = await HotAPI(); // 热门推荐的数据
    // console.log(res);
    // this.goodsList = res.data.data.records;
    // this.hotList = hotRes.data.data.records;
  },
  mounted() {
    console.log("视图挂载后");
  },
};
</script>

<style lang="less">
.header {
  height: 50px;
  background-color: #333;
}

/* 入场的起始状态 = 离场的结束状态 */
.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s linear;
}

.slide-enter-to,
.slide-leave {
  opacity: 1;
}
</style>
