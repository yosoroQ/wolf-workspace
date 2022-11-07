<template>
  <div id="app">
    <Topbar></Topbar>
    <Header></Header>
    <!-- 视图组件 -->
    <router-view />

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
  </div>
</template>

<script>
// 当前组件引用子组件
import Header from "@/components/Header";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

// import axios from "axios";
import { JingpinAPI, HotAPI } from "@/request/api";

export default {
  components: {
    Header,
    Topbar,
    Footer,
  },
  data() {
    return {
      goodsList: [
        // { name: "小明的肥皂", img: "XX", coin: 55 },
        // { name: "小明的肥皂1", img: "XX", coin: 55 },
        // { name: "小明的肥皂2", img: "XX", coin: 55 },
      ],
      hotList: [],
    };
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

    let res = await JingpinAPI(); // 精品推荐的数据

    let hotRes = await HotAPI(); // 热门推荐的数据
    console.log(res);
    this.goodsList = res.data.data.records;
    this.hotList = hotRes.data.data.records;
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
</style>
