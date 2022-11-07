<template>
  <div>
    <div class="two"></div>
    <section class="footer">
      <div class="wraper">
        <div class="left">
          <span
            ><a href="#"><img src="../assets/images/4.png" alt="" /></a
          ></span>
          <span
            ><a href="#"><img src="../assets/images/5.png" alt="" /></a
          ></span>
        </div>
        <div class="center">
          <p>
            <span
              >北京畅游时代数码技术有限公司版权所有 COPYRIGHT © 2020
              CHANGYOU.COM LIMITED.
            </span>
            <a href="#"> 法律声明 </a>
            <span>|</span>
            <a href="#"> 联系我们 </a>
            <span>|</span>
            <a href="#"> 家长监护 </a>
            <span>|</span>
            <a href="#"> 隐私政策 </a>
          </p>
          <p>
            <span>京ICP证：</span>
            <a href="#">京ICP备08104911号</a>
            <span> | 京网文</span>
            <a href="#">[2017]10786-1261号</a>
            <span> | ISBN号：</span>
            <span style="color: #484848">978-7-498-00276-1</span>
          </p>

          <p>
            <img
              style="margin-right: 4px"
              src="../assets/images/6.png"
              alt=""
            />
            <a href="#">京公网安备 11010702000007号</a>
            <span> | 文网游备字：</span>
            <span class="high">[2017]C-RPG0026</span>号
            <span> | 新广出审：</span>
            <span class="high">[2017]7244</span>号
            <span> | 全国文化市场举报电话：</span>
            <span class="high">12318</span>
          </p>
          <p>
            <span>著作权登记号：</span>
            <span class="high">2017SR136499</span>
          </p>
        </div>
        <div class="right">
          <a href="#"><img src="../assets/images/8.png" alt="" /></a>
        </div>
      </div>
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
.footer .wraper {
  width: 1300px;
  height: 120px;
  margin: 0 auto;
  /* border: 1px solid hotpink; */
}

.footer .wraper .left {
  width: 175px;
  height: 88px;
  padding: 0 5px;
  /* border: 1px solid green; */
  margin-top: 30px;
  float: left;
}
.footer .wraper .left span {
  float: left;
}
.footer .wraper .left span img {
  width: 115px;
  height: 60px;
  /* margin-top: 20px; */
}
.footer .wraper .left span + span img {
  width: 50px;
  height: 60px;
  /* margin-top: 20px; */
}
.footer .wraper .center {
  width: 930px;
  height: 95px;
  margin-top: 10px;
  /* border: 1px solid  orange; */
  float: left;
}
.footer .wraper .center p {
  color: #8e8e8e;
  margin-top: 5px;
}
.footer .wraper .center p a {
  color: #8e8e8e;
}
.footer .wraper .center p + p a {
  color: #484848;
}
.footer .wraper .center p + p + p img {
  float: left;
}
.footer .wraper .center p + p + p .high {
  color: #484848;
}
.footer .wraper .right {
  width: 100px;
  height: 100px;
  /* border: 1px solid skyblue; */
  float: left;
}
.footer .wraper .right img {
  width: 32px;
  height: 48px;
  margin-top: 25px;
  margin-left: 20px;
}

.two {
  float: left;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 5px;
  background: url(../assets/images/11.png);
}
</style>