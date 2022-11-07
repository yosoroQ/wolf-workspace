<template>
  <div v-if="isShowLoginModal" class="modal">
    <div class="mask"></div>
    <div class="loginBox"></div>
  </div>
</template>
<script>
// 引用Vuex的辅助函数
import { mapState } from "vuex";
export default {
  // 为了能够同步Vuex的值的变化，所以我们应该把Vuex的值返回在计算属性中
  computed: {
    ...mapState({
      isShowLoginModal: (state) => state.showModal.isShowLoginModal,
    }),
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
  }
}
</style>

  
