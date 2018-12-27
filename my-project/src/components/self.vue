<template>
    <div class="tsly">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="val in allimg"><img :src="val" alt=""></div>
            </div>
       </div>
       <div class="nas">
           <dl>
               <dt><i class="iconfont icon-fenlei-xuanzhong"></i></dt>
               <dd>电台分类</dd>
           </dl>
           <dl>
               <dt><i class="iconfont icon-xiugaioryijian"></i></dt>
               <dd>电台排行</dd>
           </dl>
           <dl>
               <dt><i class="iconfont icon-iconzhengli-"></i></dt>
               <dd>DI电音</dd>
           </dl>
           <dl>
               <dt><i class="iconfont icon-CN_doubanFM"></i></dt>
               <dd>小冰电台</dd>
           </dl>
       </div>
       <p>推荐歌单</p>
       <div class="center">
           <dl v-for="vals in centerdata">
               <dt><img :src="vals.imgs" alt=""></dt>
               <dd>{{vals.txt}}</dd>
           </dl>
       </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
 import Swiper from 'swiper';
export default  {
    name:'Self',
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
 },
    data(){
        return{
          allimg:['https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2074351439,1239082867&fm=202&src=766','https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3839024746,4107568410&fm=202&src=762','https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3923658876,2860861174&fm=202&src=781'],
          centerdata:[{imgs:'https://cbu01.alicdn.com/img/ibank/2018/952/125/9542521259_717411772.220x220.jpg',txt:'要做什么梦是每个人的自由'},{imgs:'https://cbu01.alicdn.com/img/ibank/2017/424/040/4485040424_1611482457.220x220.jpg',txt:'要做什么梦是每个人的自由'},{imgs:'https://cbu01.alicdn.com/img/ibank/2017/418/869/4458968814_1756597522.220x220.jpg',txt:'要做什么梦是每个人的自由'},{imgs:'https://cbu01.alicdn.com/img/ibank/2018/900/972/9249279009_250702543.220x220.jpg',txt:'要做什么梦是每个人的自由'},{imgs:'https://cbu01.alicdn.com/img/ibank/2017/064/539/4946935460_1735480233.220x220.jpg',txt:'要做什么梦是每个人的自由'},{imgs:'https://cbu01.alicdn.com/img/ibank/2016/126/940/3439049621_1171938601.220x220.jpg',txt:'要做什么梦是每个人的自由'}
              ]
        }
        }
}
</script>

<style>
.center{
    width: 98%;
    margin:0 auto;
    display: flex;
    flex-wrap: wrap;
}
.center>dl{
    width:33%;
    height: 120px;
}
.center>dl>dt{
    width: 100%;
    height: 80px;
}
.center>dl>dt>img{
    width: 96%;
   height: 100%;
   margin:0 auto;
}
.center>dl>dd{
    font-size: 12px;
    padding:5px 0;
    box-sizing: border-box;
}
    .tsly{
        width: 100%;
        height: 100%;
    }
    .swiper-container {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    }
    .swiper-wrapper {
    height: 150px;
    }
    .swiper-slide{
        width: 100%;
        margin:0 auto;
    }
    .swiper-slide img {
     width: 95%;
     height: 150px;
     margin-left:2%;
    }
    .nas{
        width:100%;
        height: 80px;
        display: flex;
        margin-top:10px;
    }
    .nas>dl{
        flex:1;
        text-align: center;
    }
    .nas>dl>dt{
        margin:0 auto;
        text-align: center;
  
        color:#fff;
        font-size: 22px;
        width: 50px;
        line-height: 50px;
        height: 50px;
        border-radius: 50%;
        background:gray;
    }
    .nas>dl>dt>i{
        font-size: 28px;
    }
    .nas>dl>dd{
        font-size: 12px;
        line-height: 30px;
    }
    p{
        width: 98%;
        height: 30px;
        margin:4px auto;
    }
</style>
