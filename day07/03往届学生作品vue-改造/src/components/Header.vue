<template>
  <div>
    <section class="header">
      <div class="main">
        <div class="top-logo">
          <a href="#"><img src="../assets/images/top-logo.png" alt="" /></a>
        </div>

        <ul class="top-nav">
          <li class="top-nav-li">
            <a href="#">
              <b style="background: rgb(22, 158, 224)">
                <img src="../assets/images/1.png" alt="" />
              </b>
              <span>注册</span>
            </a>
          </li>
          <li class="top-nav-li">
            <a href="#">
              <b style="background: rgb(249, 188, 0)">
                <img src="../assets/images/2.png" alt="" />
              </b>
              <span>充值</span>
            </a>
          </li>
          <li class="top-nav-li">
            <a href="#">
              <b style="background: rgb(243, 46, 0)">
                <img src="../assets/images/3.png" alt="" />
              </b>
              <span>畅游</span>
            </a>
          </li>
          <li class="top-nav-lli">
            <a href="#">
              <span>客服</span>
            </a>
          </li>
          <li class="top-nav-lli">
            <a href="#">
              <span>畅游全服务</span>
            </a>
          </li>
          <li class="top-nav-lli">
            <a href="#">
              <span>畅游全游戏</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="one"></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.header a {
  text-decoration: none;
}
.header .main {
  width: 1100px;
  height: 50px;
  margin: 0 auto;
  font-family: "宋体";
  font-size: 12px;
  /* background-color: greenyellow; */
}
.top-logo {
  width: 90px;
  height: 30px;
  margin-top: 6px;
  /* padding-top: 6px; */
  /* padding-right: 13px; */
  border-right: 1px solid #cecece;
  float: left;
}
.top-logo img {
  width: 90px;
  height: 36px;
  float: right;
}
.top-nav {
  float: right;
  height: 50px;
  /* margin-top: 10px; */
  /* border: 1px solid blue; */
}
.top-nav-li {
  display: block;
  position: relative;
  float: left;
  width: 80px;
  padding: 0 10px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  /* border: 1px solid red; */
}

.top-nav-li a {
  width: 80px;
  height: 35px;
  float: left;
  padding-top: 10px;
}

.top-nav-li b {
  width: 35px;
  height: 35px;
  display: block;
  /* margin: 0 auto; */
  border-radius: 50%;
  float: left;
}
.top-nav-li img {
  width: 25px;
  height: 25px;
  line-height: 25px;
  /* float: left; */
}
.top-nav-li img:hover {
  color: purple;
}
.top-nav-li span {
  width: 35px;
  height: 25px;
  /* background: blueviolet; */
  display: block;
  line-height: 25px;
  text-align: center;
  float: left;
  margin-top: 5px;
  color: black;
  margin-left: 5px;
}
.top-nav-li > a:hover span {
  color: purple;
}

.top-nav-lli {
  display: block;
  position: relative;
  float: left;
  height: 50px;
  line-height: 35px;
  width: 95px;
  text-align: center;
  border-left: 1px solid #e1e1e1;
  border-right: 1px solid #e1e1e1;
  padding: 0 10px;
}

.top-nav-lli a {
  width: 80px;
  height: 40px;
  float: left;
  padding-top: 10px;
}

.top-nav-lli span {
  color: black;
}
.top-nav-lli span:hover {
  color: purple;
}

.one {
  float: left;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 5px;
  background: url(../assets/images/10.png);
}
</style>