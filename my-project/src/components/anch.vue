<style>
.radi{
    widows: 100%;
    height: 100%;;
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
     height: 130px;
     margin-left:2%;
    }
    .nas{
        width:100%;
        height: 100px;
        display: flex;
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
    .ps{
        width: 96%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .ps>p{
        font-size: 12px;
    }
    .icon-gedan{
        font-size: 18px;
    }
    .mains{
        width: 96%;
        margin: 0 auto;
        }
    .mains>dl{
        width: 100%;
        height: 80px;
        margin-top:5px;
        display: flex;
    }
    .mains>dl>dt{
        width: 25%;
    }
    .mains>dl>dd{
        flex:1;
    }
    .mains>dl>dd>h5{
        font-size: 16px;
        line-height: 40px;
    }
     .mains>dl>dd>p{
         font-size: 12px;
         padding-bottom: 3px;
     }
    .mains>dl>dt>img{
        width: 90%;
        margin: 0 auto;
        height: 100%;
    }
</style>
<template>
    <div class="radi">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="val in allimg"><img :src="val" alt=""></div>
            </div>
       </div>
       <div class="nas">
           <dl>
               <dt><i class="iconfont icon-CN_doubanFM"></i></dt>
               <dd>电台分类</dd>
           </dl>
           <dl>
               <dt><i class="iconfont icon-Golf"></i></dt>
               <dd>电台排行</dd>
           </dl>
           <dl>
               <dt><i class="iconfont icon-31zuji"></i></dt>
               <dd>DI电音</dd>
           </dl>
           <dl>
               <dt><i class="iconfont icon-CN_doubanFM"></i></dt>
               <dd>小冰电台</dd>
           </dl>
       </div>
       <div class="ps">
           <h5>今日优选</h5>
           <p><i class="iconfont icon-gedan"></i>换一换</p>
       </div>
       <div class="mains">
           <dl v-for="itm in alldata">
               <dt>
                   <img :src="itm.imgs" alt="">
               </dt>
               <dd>
                   <h5>{{itm.txt}}</h5>
                   <p>节目{{itm.sum}}</p>
                   <p>{{itm.tie}}</p>
               </dd>
           </dl>
       </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
 import Swiper from 'swiper';
export default  {
    name:'Anch',
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
        return {
             allimg:['http://ahj.cm/data/upload/shop/textures/05749563064270436.jpg','http://ahj.cm/data/upload/shop/textures/05991336003174393.jpg','http://ahj.cm/data/upload/shop/textures/05633656400372056.jpg'],
             alldata:[{imgs:'https://cbu01.alicdn.com/img/ibank/2018/952/125/9542521259_717411772.220x220.jpg',txt:'末那大叔',sum:18,tie:'愿你的故事有人能懂'},{imgs:'https://cbu01.alicdn.com/img/ibank/2017/424/040/4485040424_1611482457.220x220.jpg',txt:'要做什么梦是每个人的自由',sum:281,tie:'失去才懂 纯音乐'},{imgs:'https://cbu01.alicdn.com/img/ibank/2017/418/869/4458968814_1756597522.220x220.jpg',txt:'要做什么梦是每个人的自由',num:30,tie:'会不会在某一天再相遇'}]
        }
    }
}
</script>


