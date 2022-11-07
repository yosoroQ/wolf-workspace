<template>
  <div class="goods">
    <div class="wrap">
      <Crumb></Crumb>
      <img src="../assets/img/banner.4c6b6225.png" width="100%" alt />
      <ul class="options">
        <li>
          <strong>排序：</strong>
          <span
            :class="{active:index==options1Num}"
            v-for="(item,index) in options1"
            :key="index"
            @click="options1Fn(index,item.min,item.max)"
          >{{item.txt}}</span>
          <!-- <span>1500-2500个</span>  { 属性? min:1500,max:2500,txt:'1500-2500个' } -->
        </li>
        <li>
          <strong>分类：</strong>
          <span
            :class="{active:item.isActive}"
            v-for="(item,index) in options2"
            :key="index"
            @click="options2Fn(index,item.type)"
          >{{item.txt}}</span>
        </li>
      </ul>
      <List :arr="goodsListShow" />
      <p style="text-align:center;margin-top:20px;">{{isReachBottom?'已经没有数据了.':'正在加载中....'}}</p>
    </div>
  </div>
</template>                            
<script>
/*
    步骤一: 默认显示8条数据 , 增加滚动事件 ,处理函数scrollFn
    步骤二: 判断是否到底部了, 进行数据的追加
           使用utils中getScrollTop(),getClientHeight(), getScrollHeight()
           当滚动距离+窗口高度 >= 文档距离时 追加数据
    步骤三: scrollFn中 追加第二页,第三页数据... for循环中push
           this.page++ , 每次循环8次(每页追加8条数据) 
    步骤四: 优化, 加载完第二页的数据后再去加载第三页数据.
           节流: 通过一个变量控制 让代码在一段时间内不会重复执行.
    步骤五: 判断数据是否加载完毕 , 增加 加载中和没有数据的提示信息
            bug: 解决切换查询类型/积分 page 和是否到达底部未更新问题.
*/
import Crumb from "../components/Crumb.vue";
import List from "../components/home/List.vue";
import { GoodsSearchAPI } from "@/request/api";
import { getScrollTop, getClientHeight, getScrollHeight } from "@/utils";
export default {
  data() {
    return {
      //栏目 - 1精品 2 热门 0  所有
      did: 0,
      //类型-  1实体 2 虚拟  0 所有
      type: 0,
      //最小积分
      min: 0,
      //最大积分  为0时 不做逻辑判断
      max: 0,
      //搜索关键字
      keyword: "",
      //产品列表
      goodsList: [],
      //显示产品列表的数组
      goodsListShow: [],
      // 排序的数组项
      options1: [
        { min: 0, max: 10000, txt: "全部" },
        // "我还可以兑换"的max值是Header组件的coin值
        { min: 0, max: 0, txt: "我还可以兑换" },
        { min: 0, max: 500, txt: "0-500分" },
        { min: 500, max: 1000, txt: "500-1000分" },
        { min: 1000, max: 1500, txt: "1000-1500分" },
        { min: 1500, max: 2500, txt: "1500-2500分" },
        { min: 2500, max: 6500, txt: "2500-6500分" },
        { min: 6500, max: 10000, txt: "6500-10000分" }
      ],
      //当前选中项
      options1Num: 0,
      // 分类数组项
      options2: [
        { type: 0, txt: "全部", isActive: true },
        { type: 1, txt: "实体商品", isActive: false },
        { type: 2, txt: "虚拟商品", isActive: false }
      ],
      page: 1,
      size: 8,
      //是否加载中
      isLoading: false,
      //是否已经到底
      isReachBottom: false
    };
  },
  components: {
    Crumb,
    List
  },
  created() {
    //获取参数 keyword
    console.log("keyword:", this.$route.query.keyword);
    this.keyword = this.$route.query.keyword;
    this.getGoods(); //返回30条 ,默认只显示8条数据
    console.log("goodsList", this.goodsList); // 同步代码 ,此处拿不到异步结果  0
  },
  mounted() {
    //监听滚动事件
    window.addEventListener("scroll", this.scrollFn);
  },
  beforeDestroy() {
    //取消滚动事件
    window.removeEventListener("scroll", this.scrollFn);
  },
  methods: {
    //获取产品信息
    async getGoods() {
      let res = await GoodsSearchAPI({
        did: this.did,
        type: this.type,
        min: this.min,
        max: this.max,
        keyword: this.keyword
      });
      if (!res) return;
      console.log("res:", res); //看network
      this.goodsList = res.data;
      //筛选出8条 默认展示8条数据
      this.goodsListShow = this.goodsList.filter((item, index) => index < 8);
      //初始化判断
      this.isReachBottom = false;
      this.page = 1;
      //根据新数据判断是否到达底部.
      if (this.goodsListShow.length >= this.goodsList.length) {
        //没有数据了
        this.isReachBottom = true;
      }
    },
    options1Fn(index, min, max) {
      this.options1Num = index;
      this.min = min;
      this.max = max;
      this.getGoods();
    },
    options2Fn(index, type) {
      //设置所有的isactive都为false
      this.options2.forEach(item => (item.isActive = false));
      //设置当前点击的为true
      this.options2[index].isActive = true;
      this.type = type;
      this.getGoods();
    },
    scrollFn() {
      // console.log(
      //   "滚动了...",
      //   getScrollTop(),
      //   getClientHeight(),
      //   getScrollHeight()
      // );
      //当 滚动距离+窗口高度 >= 文档高度时 加载新数据
      if (getScrollTop() + getClientHeight() >= getScrollHeight() - 200) {
        //判断是否已经加载完毕
        if (this.goodsListShow.length >= this.goodsList.length) {
          //没有数据了
          this.isReachBottom = true;
          return;
        }

        if (this.isLoading == false) {
          this.isLoading = true;
          console.log("可以加载新数据了");
          //往 goodsList 中 拿8条数据 到 goodsListShow数组中.
          // 第一页  size:8  page:1   0~7
          // 第二页  size:8  page:2   8~15
          // 第三页  size:8  page:3   16~23
          this.page++; //加载下一页
          //模拟异步请求时长  真实请求后台数据(传递page,size)
          setTimeout(() => {
            for (
              let i = (this.page - 1) * this.size;
              i < this.size * this.page;
              i++
            ) {
              console.log("i", i, this.goodsList[i]);
              if (this.goodsList[i]) {
                this.goodsListShow.push(this.goodsList[i]);
              }
              //this.goodsList[i] &&  this.goodsListShow.push(this.goodsList[i]);
            }
            this.isLoading = false; //已经加载完了.
          }, 2000);
        }
      }
    }
  },
  watch: {
    //解决当前goods页面搜索的问题.
    "$route.query.keyword": {
      handler(newVal, oldVal) {
        if (newVal != oldVal) {
          this.keyword = newVal;
          this.getGoods();
        }
      }
    }
  }
};
</script>
 
<style lang = "less" scoped>
@import "../assets/public.less";

.goods {
  padding-bottom: 50px;
  background: #efefef;
  padding-top: 20px;
  .options {
    padding-top: 20px;
    padding-bottom: 40px;
    li {
      margin-top: 20px;
      strong {
        color: #000;
        font-weight: bold;
      }
      span {
        margin-right: 20px;
        margin-left: 10px;
        cursor: pointer;
        color: #999;
        &.active {
          color: @base-color;
          font-weight: bold;
        }
      }
    }
  }
}
</style>