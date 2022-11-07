<!--
 * @Author: iou2008 25844550@qq.com
 * @Date: 2022-11-03 15:20:00
 * @LastEditors: iou2008 25844550@qq.com
 * @LastEditTime: 2022-11-03 15:31:53
 * @FilePath: \爬虫相关e:\项目\狼\湛江实训\1102\code-shop\src\components\home\List.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ul class="list">
    <li v-for="item in arr" :key="item.id">
      <section>
        <img
          class="goods-img"
          :src="'http://sc.wolfcode.cn' + item.coverImg"
          alt=""
          @click="goToDetail(item.id)"
        />
        <div class="bottom-box">
          <h3>{{ item.name }}</h3>
          <p>{{ item.coin }} 积分</p>
          <div class="btn">立即兑换</div>
        </div>
        <img
          class="flag"
          src="../../assets/img/section_new.png"
          alt=""
          v-show="item.isLatest"
        />
        <img
          class="flag"
          src="../../assets/img/section_hot.png"
          alt=""
          v-show="item.isHotSale"
        />
      </section>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["arr"],
  data() {
    return {};
  },
  methods: {
    goToDetail(id) {
      //   this.$router.push(`/details?id=${id}`);
      ///details/1/zhangsan        $route.params.id
      //details?id=1&name=zhangsan  $route.query.id
    },
  },
};
</script>

<style lang = "less" scoped>
.list {
  /* width: 1220px; */
  /* overflow: hidden; */
  display: flex;
  /* 自动换行 */
  flex-wrap: wrap;

  li {
    &:nth-of-type(4n) {
      margin-right: 0px;
    }
    width: 285px;
    float: left;
    margin-bottom: 20px;
    margin-right: 20px;
    position: relative;
    section {
      width: 285px;
      height: 492px;
      position: relative;
      transition: all 0.5s linear;
      .goods-img {
        width: 285px;
      }
    }

    .bottom-box {
      width: 285px;
      height: 162px;
      background-color: #fff;
      text-align: center;
      h3 {
        font-size: 18px;
        font-family: SourceHanSansSC;
        font-weight: 300;
        color: #333333;
        height: 56px;
        line-height: 56px;
        /* background-color: #ffc; */
      }
      p {
        font-size: 18px;
        font-family: SourceHanSansSC;
        font-weight: bold;
        color: #fd604d;
      }
      .btn {
        width: 100px;
        height: 36px;
        line-height: 36px;
        border: 1px solid #0a328e;
        margin: 20px auto 0;
        font-size: 18px;
        font-family: SourceHanSansSC;
        font-weight: 300;
        color: #0a328e;
      }
    }

    .flag {
      position: absolute;
      left: 0;
      top: 0;
    }

    &:hover {
      cursor: pointer;
      section {
        margin-top: -15px;
        box-shadow: 0 0 10px #ccc;
        .btn {
          background-color: #0a328e;
          color: #fff;
        }
      }
    }
  }
}
</style>