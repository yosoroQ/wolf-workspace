<template>
  <div id="app">
    <!-- 头部组件 -->
    <Header></Header>
    <!-- 内容组件 -->
    <router-view />

    <!-- 底部组件 -->
    <Footer></Footer>

    <dl class="fixed">
      <dt></dt>
    </dl>
  </div>
</template>

<script>
// 引用需要用到的组件
import Footer from "@/components/Footer";
import Header from "./components/Header.vue";
export default {
  // 注册组件
  components: { Header, Footer },
};
</script>

<style lang="less">
.fixed {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 20;
}
.fixed dt {
  right: 0px;
  position: absolute;
  top: 50%;
  margin-top: -106px;
  width: 98px;
  height: 214px;
  cursor: pointer;
  background: url(./assets/images/48.png) no-repeat;
}
</style>
