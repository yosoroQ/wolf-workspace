<template>
  <div class="topbar">
    <div class="wrap topbarWrap">
      <div class="l">欢迎来到叩丁狼积分商城</div>
      <ul class="r">
        <li>
          <img
            class="avatar"
            src="../assets/img/userImg.f8bbec5e.png"
            width="26"
            alt=""
          />
          用户名：--
        </li>
        <li>我的鸡腿：--</li>
        <li>获取鸡腿</li>
        <li>叩丁狼官网</li>
        <li class="login-btn">登录</li>
      </ul>
    </div>
  </div>
</template> 

<style lang="less" scoped>
.topbar {
  height: 40px;
  line-height: 40px;
  background: #242b39;
  font-size: 14px;
  .topbarWrap {
    color: #fffefe;
    display: flex;
    justify-content: space-between;
    .r {
      li {
        float: left;
        margin-left: 20px;
        text-align: center;
        cursor: pointer;
        &.login-btn {
          width: 124px;
          height: 40px;
          background: #0a328e;
        }
      }
      .avatar {
        vertical-align: middle;
        border-radius: 50%;
      }
    }
  }
}
</style>