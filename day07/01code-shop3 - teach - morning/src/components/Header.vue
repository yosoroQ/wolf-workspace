<template>
  <div class="headerWrap wrap">
    <h1 class="logobox">
      <img src="../assets/img/indexLogo.6f8ac4f0.png" alt="" />
    </h1>
    <ul class="navbox">
      <li class="current">首页</li>
      <li>全部商品</li>
      <li>个人中心</li>
      <li>我的订单</li>
      <li>专属福利</li>
    </ul>
    <div class="searchbox">
      <input type="text" />
      <span
        ><img src="../assets/img/search.png" alt="" class="search-btn"
      /></span>
    </div>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style lang = "less" scoped>
.headerWrap {
  height: 118px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  .navbox {
    width: 500px;
    display: flex;
    justify-content: space-between;
    .current {
      color: #0a328e;
    }
  }
}

.searchbox {
  display: flex;
  input {
    width: 214px;
    height: 40px;
    border: 1px solid #dedede;
    border-radius: 20px 0 0 20px;
    box-sizing: border-box;
    padding-left: 19px;
    outline-style: none;
  }
  span {
    width: 50px;
    height: 40px;
    background: #0a328e;
    border-radius: 0px 20px 20px 0px;
    text-align: center;
    line-height: 40px;
  }
  .search-btn {
    width: 15px;
    height: 15px;
  }
}
</style>