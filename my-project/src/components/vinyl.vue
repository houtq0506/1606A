<style>
*{
    margin: 0;
    padding: 0;
    
}
.wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.top {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #ccc;
  padding: 0 10px;
  box-sizing: border-box;
}
.dy {
  font-size: 20px;
}
.right > i {
  font-size: 20px;
}
.swiper-wrapper{
    width: 100%;
    height: 100%;
}
.img {
  width: 100%;
  height: 120px;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
}
.swiper-slide{
    width: 90%;
}
.img>img {
  width: 90%;
  border-radius: 8px;
  height: 100%;
}
.enth {
  padding-left: 15px;
}
.pty{
    width: 100%;
    height: 30px;
    line-height: 30px;
}
.pty>span{
    width: 100%;
    display: inline-block;
    text-align: center;

}
.bannersy{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}
.bannersy>dl{
    width: 20%;
    padding: 10px 0;
    box-sizing: border-box;
}
.bannersy>dl>dt{
     display: inline-block;
        padding: 8px 10px;
        border-radius: 50%;
        background:  #ffeae8;
}
.bannersy>dl>dt>i{
    font-size: 18px;
}
.bannersy>dl>dd{
    width: 100%;
    font-size: 12px;
    text-align: center !important;
    display: inline-block;
}
.newly{
    width: 85%;
    height: 40px;
    
    margin: 0 auto;
}
.newly>img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
.fl{
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-left: 25px;
    font-size: 12px;
}
.cent{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;;
}
</style>
<template>
    <div class="wrap">
        <div class="top">
            <span class="dy"><</span>
            <span>会员中心</span>
            <div class="right">
                <i class="iconfont icon-tubiao-"></i>
                <i class="iconfont icon-PCbofangye_paihangbang"></i>
            </div>
        </div>
        <div class="swiper-container img">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img class="enth" src="http://pic26.photophoto.cn/20130127/0028013226863377_b.jpg" alt=""></div>
                <div class="swiper-slide"><img class="enth" src="http://img1.imgtn.bdimg.com/it/u=2430510654,3359275973&fm=26&gp=0.jpg" alt=""></div>
            </div>
       </div>
       <p class="pty"><span>黑胶VIP权利</span></p>
        <div class="bannersy">
            <dl>
                <dt><i class="iconfont icon-servicequanmianbaozhang"></i></dt>
                <dd>会员曲库</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-yinle"></i></dt>
                <dd>会员曲库</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-xiaolian"></i></dt>
                <dd>会员曲库</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-shipin"></i></dt>
                <dd>会员曲库</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-weibiaoti2fuzhi15"></i></dt>
                <dd>会员曲库</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-31zuji"></i></dt>
                <dd>会员曲库</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-31zuji"></i></dt>
                <dd>会员曲库</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-31zuji"></i></dt>
                <dd>会员曲库</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-31zuji"></i></dt>
                <dd>会员曲库</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-31zuji"></i></dt>
                <dd>会员曲库</dd>
            </dl>
        </div>
        <div class="newly">
            <img src="http://pic26.photophoto.cn/20130127/0028013226863377_b.jpg" alt="">
        </div>
        <div class="fl">福利券:非人学院99元大礼包</div>
        <div class="cent">会员精选内容</div>
           </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper';
import BScroll from "better-scroll";
export default {
  name: "Vinyl",
mounted(){
 new Swiper ('.swiper-container', {
 loop: true,
 // 如果需要分页器
 pagination: '.swiper-pagination',
 // 如果需要前进后退按钮
 nextButton: '.swiper-button-next',
 prevButton: '.swiper-button-prev',
 // 如果需要滚动条
 scrollbar: '.swiper-scrollbar',
 })
 }
};
</script>
