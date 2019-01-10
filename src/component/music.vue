<template>
    <div class="wraps">
        <header>
            <span><</span>
            <span>补换驾照</span>
            <span class="eng">...</span>
        </header>
        <ul class="order">
            <li>订单提交</li>
            <li>填写收货地址</li>
            <li>正在办理</li>
            <li>办理完成</li>
        </ul>
        <div class="img"><img src="https://gw.alicdn.com/tfs/TB18SwTxVzqK1RjSZFvXXcB7VXa-520-280.jpg_.webp" alt=""></div>
        <div class="photo">
           <li v-for="(item,index) in list" :key='index' @click='change(item)'>
               <img v-if='item.src' :src="item.src" alt="">
               <img v-else :src="addimg" alt="">
               <p>{{item.desc}}</p>
           </li>
            <div class="infos mark" v-show='info'>
                <img :src="currt.demo" alt="">
                <div class="pics">
                    <button @click='btn(1)'>拍照</button>
                    <button @click='btn(2)'>相册</button>
                    <button @click='cancel'>取消</button>
                </div>
            </div>
        </div>
        <section>
            <div class="serves" @click='chanedt'>
                <span>服务类型</span>
                <p><span>{{form}}</span><span class="icfg">></span></p>
            </div>
            <citypicker></citypicker>
            <!-- <div class="serves" @click='citys'>
                <span>当前驾照签发城市</span>
                <p><span>请选择签发地</span></p>
            </div>
            <div class="serves">
                <span>可换补的签发城市</span>
                <p><span>请选择补换地</span></p>
            </div> -->
            <div class="serves bords">
                <span>服务费</span>
                <p><span class="bg">￥399</span></p>
            </div>
            <div class="serves hty">
                <span>优惠</span>
                <p><span>登陆后查看优惠券</span><span class="icfg">></span></p>
            </div>
            <div class="takes">
                <p>常见问题</p>
                <div class="tp" @click='qiuqiu'><img src="//www.runoob.com/wp-content/uploads/2016/02/0FBC219D-EFF6-4F0D-BB9D-2A97BD177770.jpg" alt=""></div>
            </div>
        </section>
        <footer>
            <p>实付:<span>￥399</span></p>
            <button @click="clicks">立即支付</button>
        </footer>
        <div v-show='kf'>
               <van-popup v-model="kf" class="bottoms">
                   <button id="cc">跳转客服</button>
                   <!-- <a href="mailto:342690199@qq.com">打电话</a> -->
                   <a href="tel:17796925820"></a>
               </van-popup>
        </div>
        <div v-show="show">
            <van-popup position='bottom' v-model="show" overlay>
                <van-picker @confirm='confirms' @cancel='onCancal' show-toolbar :columns="columns"/>
           </van-popup>
        </div>
    </div>
</template>

<script>
import {uploadImg,goPay,isVip} from '@/api/index'
import Citypicker from '../component/citypicker'
import {mapState,mapMutations} from 'vuex' 
import add from '../assets/add.png'
export default {
    name:'music',
    components:{
        Citypicker
    },
    data(){
        return {
            currt:{},
            info:false,
            form:'',
            show:false,
            columns:['补驾照','换驾照'],
            val:'',
            kf:false
        }
    },
    methods:{
        qiuqiu(){
           this.kf=true
        },
        onCan(){
            this.kf=false
        },
        onCancal(e){
            this.show=false
        },
        confirms(value){
            this.form=value
            this.onCancal()
        },
        chanedt(){
            this.show=true
        },
         ...mapMutations({
            updatelist:'music/updatelist'
        }),
        change(item){
            this.info=true
            this.currt=item
            console.log(item,'item')
        },
        cancel(){
            this.info=false
        },
        clicks(){
            goPay()
        },
        async btn(type){
            let res = await uploadImg(type)
            let index=this.list.findIndex(item=>item==this.currt)
            console.log(index,'index')
            this.updatelist({
                index,
                src:res.data.url
            })
        }
    },
    // mounted(){
    //    isVip().then(res=>{
    //        console.log(res,'res')
    //    })
    // },
    computed:{
        ...mapState({
            list:state=>state.upload.list
        }),
        addimg(){
           return add
        }
    }
}
</script>

<style>
*{
    padding: 0 ;
    margin: 0;
    list-style: none;
}
.bottoms{
    position: fixed;
    bottom:0;
    width: 90%;
    height: 150px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    align-items: center;
}
.bottoms>a,.bottoms>button{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
}
.mark{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background:rgba(0, 0, 0, .5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.mark>img{
    width: 90%;
}

.pics{
    width: 100%;
    height: 125px;

}
.pics>button{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background:blanchedalmond;
}
  .iconfont {
  font-family:"iconfont" !important;
  font-size:22px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wraps{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
header{
    width: 96%;
    height: 40px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
}
.eng{
    font-size: 20px;
    line-height: 2px;
}
.order{
    width: 100%;
    height: 50px;
    align-items: center;
    display: flex;
    border:solid 1px #ccc;
    color: blue;
}
.order>li{
    flex:1;
    text-align: center;
}
.img{
    width: 100%;
    height: 120px;
}
.img>img{
    width: 100%;
    height: 100%;
}
.photo{
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: solid 10px #ccc;
}
.photo>li{
    flex: 1;
    height: 100%;
    margin-top: 20px;
    text-align: center;
    box-sizing: border-box;
}
.photo>dl>dd{
    padding-top: 8px;
}
.photo>dl>dt{
    margin: 0 auto;
    width: 80%;
    height: 45px;
    border-radius: 12px;
    border:solid 1px #ccc;
    text-align: center;
}
/* .photo>dl>dt>span{
    width: 30px;
    height: 30px;
    margin-top: 7px;
    border-radius: 50%;
    border:solid 1px #ccc;
    display: inline-block; 
}
.photo>dl>dt>span>b{
    width: 100%;
    height: 100%;
    line-height: 30px;
    text-align: center;
    font-size:20px;
} */
section{
    width: 100%;
}
.serves{
    width: 100%;
    height: 55px;
    border-bottom: solid 1px #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 10px;
    box-sizing: border-box;
}
.icfg{
    font-size: 22px;
    padding-left: 3px;
}
.bg{
    color: red;
}
.bords{
    border-bottom: solid 10px #ccc;
    }
    .hty{
        border:none;
    }
    .takes{
        width: 100%;
        height: 80px;
        background:#ccc;
        display: flex;
        justify-content: space-between;
    }
     .takes>p{
         width:60%;
         padding-top:5px;
         text-align: right;
         display: inline-block;
         color: rgb(100, 170, 216);
     }
     .tp{
         width: 30%;
         padding-right: 15px;
         text-align: right;
     }
     .tp>img{
         width: 60px;
         height: 60px;
         border-radius: 50%;    
     }
     footer{
         width: 100%;
         height: 50px;
         display: flex;
         align-items: center;
         justify-content: space-between;
     }
     footer>p{
         width: 70%;
         text-align: left;
         padding-left: 15px;
         box-sizing: border-box;
     }
     footer>p>span{
         color: red;
     }
     footer>button{
         width: 30%;
         height: 100%;
         background:#ccc;
         color: #fff;
         text-align: center;
         line-height: 50px;
     }
</style>
