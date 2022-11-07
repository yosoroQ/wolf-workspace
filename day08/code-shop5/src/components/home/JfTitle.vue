<!--
 * @Author: iou2008 25844550@qq.com
 * @Date: 2022-11-03 15:12:12
 * @LastEditors: iou2008 25844550@qq.com
 * @LastEditTime: 2022-11-03 15:14:34
 * @FilePath: \爬虫相关e:\项目\狼\湛江实训\1102\code-shop\src\components\home\JfTitle.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="title">
    <div class="l">
      <img :src="imgSrc" alt="" />
      <h2>{{ title }}</h2>
    </div>
    <div class="r" v-show="title1 != '积分攻略'">
      更多
      <span><img src="../../assets/img/arrow.png" alt="" /></span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "imgSrc"],
  data() {
    return {};
  },
};
</script>
   
  <style lang = "less" scoped>
.title {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 20px;
  .l {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-family: SourceHanSansSC;
    font-weight: bold;
    color: #242b39;
    h2 {
      margin-left: 10px;
    }
  }
  .r {
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: 6px;
    }
  }
}
</style>