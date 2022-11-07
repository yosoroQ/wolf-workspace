<!--
 * @Author: iou2008 25844550@qq.com
 * @Date: 2022-11-02 09:22:18
 * @LastEditors: iou2008 25844550@qq.com
 * @LastEditTime: 2022-11-02 09:22:49
 * @FilePath: \爬虫相关e:\项目\狼\湛江实训\1102\code-shop\src\components\Test.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <slide-verify
    :l="42"
    :r="20"
    :w="362"
    :h="140"
    @success="onSuccess"
    @fail="onFail"
    @refresh="onRefresh"
    :style="{ width: '100%' }"
    class="slide-box"
    ref="slideBlock"
    :slider-text="msg"
  ></slide-verify>
</template>

<script>
export default {
  data() {
    return {
      msg: "向右滑动",
    };
  },
  methods: {
    // 拼图成功
    onSuccess(times) {
      let ms = (times / 1000).toFixed(1);
      this.msg = "login success, 耗时 " + ms + "s";
    },
    // 拼图失败
    onFail() {
      this.onRefresh(); // 重新刷新拼图
    },
    // 拼图刷新
    onRefresh() {
      this.msg = "再试一次";
    },
  },
};
</script>

<style lang="less" scoped>
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
</style>