<!--
 * @Author: iou2008 25844550@qq.com
 * @Date: 2022-11-03 11:23:54
 * @LastEditors: iou2008 25844550@qq.com
 * @LastEditTime: 2022-11-03 11:59:02
 * @FilePath: \爬虫相关e:\项目\狼\湛江实训\1102\code-shop\src\components\Toast.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="toast">
    <i :class="toastClass"></i>
    <span>{{ toastMsg }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      toastMsg: (state) => state.showToast.toastMsg,
      toastClass: (state) => state.showToast.toastClass,
    }),
  },
};
</script>
 
<style lang = "less" scoped>
.toast {
  position: fixed;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  border-radius: 10px;

  .iconfont {
    margin-right: 10px;
  }

  .icon-toast-shibai_huaban {
    color: red;
  }

  .icon-toast_chenggong {
    color: green;
  }

  .icon-toast-jinggao {
    color: orange;
  }
}
</style>