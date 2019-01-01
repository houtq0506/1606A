<style>
.nums{
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
.topsty{
    width: 100%;
    height: 50px;
    background:#34393b;
    color:#fff;
    text-align: center;
    display: flex;
    padding: 0 10px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:22px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.msg{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
}
.lef{
    width: 42%;
    padding-left: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}
.lef>img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.txt{
    flex:1;
    height: 60px;
    text-align: center;
    line-height:12px;
}
.txt>span{
    padding: 2px 8px;
    border:solid 1px #ccc;
    border-radius: 45%;
    font-size: 10px;
}
.reg{
    flex:1;
    text-align: right;
    padding-right: 12px;
    font-size: 12px;
}
.reg>span{
    padding: 3px 8px;
    border:solid 1px #ccc;
    border-radius: 35%;
}
.showes{
    width: 100%;
    height: 42px;
    border-top: solid 1px #ccc;
    margin-top: 10px;
    display: flex;
}
.showes>dl{
    width:25%;
    height: 50%;
    border-right: solid 1px #ccc;
    font-size: 12px;
    margin: 8px 0;
}
.showes>dl>dt{
    text-align: center;
}
.tbs{
    font-size: 12px;    
}
section{
    width: 100%;
}
.pop{
    width: 100%;
    height: 40px;
    background:#fffce6;
    display: flex;
    align-items: center;
    font-size: 12px;
    border-bottom: solid 10px #eeeff0;
}
.pop>span{
    width:70%;
    padding-left: 8px;
}
.quan{
    border:solid 1px #ccc;
    border-radius: 43%;
    padding: 3px 8px;
}
.cuo{
    padding-left: 12px;
}
.popst{
    width: 95%;
    margin:0 auto;
    height: 40px;
    display: flex;
    font-size: 12px;
    border-bottom: solid 10px #eeeff0;
    justify-content: space-between;
    align-items: center;
}
.dlu>i{
    font-size: 16px;
}
.dlu>span{
    font-size:14px;
}
.goat{
    height: 100%;
    display: flex;
    align-items: center;
}
.goat>img{
    width:40px;
    height: 25px;
}
.goat>span{
    padding: 0 5px;
    font-size: 14px;
}
.xy{
    border:none;
}
.gift{
    font-size:12px;
    color:#ccc;
}
.ents{
    width:26px;
    height: 20px;
    border:solid 1px #ccc;
    border-radius: 28px;
    position: relative;
}
.ents>b{
    width:20px;
    height: 20px;
    border:solid 1px #ccc;
    border-radius: 50%;
    position: absolute;
    left:0;
}
.btn{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: solid 10px #ccc;
    
}
</style>
<template>
    <div class="nums">
        <div class="topsty">
            <p></p>
            <p>账号</p>
            <i class="iconfont icon-PCbofangye_paihangbang"></i>
        </div>
        <div class="msg">
            <div class="lef">
                <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3643687533,272026720&fm=58" alt="">
                <div class="txt">
                    <p>张晓宇_</p>
                    <span>Lv.6</span>
                </div>
            </div>
            <div class="reg"><span>签到</span></div>
        </div>
        <div class="showes">
            <dl>
                <dt>动态</dt>
                <dd>1</dd>
            </dl>
            <dl>
                <dt>关注</dt>
                <dd>3</dd>
            </dl>
            <dl>
                <dt>粉丝</dt>
                <dd>3</dd>
            </dl>
            <dl>
               <dt><i class="tbs iconfont icon-Golf"></i></dt>
                <dd>我的资料</dd>
            </dl>
        </div>
        <section>
            <div class="pop">
                <span>设置绑定手机号密码，可使用密码登录。</span>
                <div class="youb">
                    <span class="quan">立即设置</span>
                    <span class="cuo">X</span>
                </div>
            </div>
            <div class="popst">
                <div class="dlu">
                    <i class="iconfont icon-xiugaioryijian"></i>
                    <span>我的消息</span>
                </div>
                <div class="goat">
                    <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546083941&di=e0d9574bba61210f30dc1abef2c523ec&src=http://ku.90sjimg.com/element_origin_min_pic/17/10/31/43eaa629dbf57e8d34e0e36080280718.jpg" alt="">
                    <span>></span>
                </div>
            </div>
            <div class="popst xy" @click='vips'>
                <div class="dlu">
                    <i class="iconfont icon-weibiaoti2fuzhi15"></i>
                    <span>会员中心</span>
                </div>
                <div class="goat">
                    <span class="gift">黑胶VIP首开仅需...</span>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546095599950&di=ecbcd2f8948678d86365f7a7a001e39d&imgtype=0&src=http%3A%2F%2Fwww.uimaker.com%2Fuploads%2Fallimg%2F120530%2F1_120530095837_4.png" alt="">
                    <span>></span>
                </div>
            </div>
            <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-fenlei-xuanzhong"></i>
                    <span>商城</span>
                </div>
                <div class="goat">
                    <span>></span>
                </div>
            </div>
            <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-31zuji"></i>
                    <span>游戏推荐:明日之后</span>
                </div>
                <div class="goat">
                    <span class="gift">黑科技撸狗</span>
                    <img src="http://www.jituwang.com/uploads/allimg/151003/258203-1510030RP894.jpg" alt="">
                    <span>></span>
                </div>
            </div>
            <div class="popst">
                <div class="dlu">
                    <i class="iconfont icon-CN_doubanFM"></i>
                    <span>在线听歌免流量</span>
                </div>
            </div>
             <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-CN_doubanFM"></i>
                    <span>设置</span>
                </div>
            </div>
             <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-CN_doubanFM"></i>
                    <span>扫一扫</span>
                </div>
            </div>
            <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-31zuji"></i>
                    <span>个性换肤</span>
                </div>
                <div class="goat">
                    <span class="gift">自选颜色</span>
                     <span>></span>
                </div>
            </div>
            <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-31zuji"></i>
                    <span>夜间模式</span>
                </div>
                <div class="goat">
                     <span class="ents"><b></b></span>
                </div>
            </div>
            <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-CN_doubanFM"></i>
                    <span>定时关闭</span>
                </div>
            </div>
            <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-CN_doubanFM"></i>
                    <span>音乐闹钟</span>
                </div>
            </div>
            <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-CN_doubanFM"></i>
                    <span>驾驶模式</span>
                </div>
            </div>
            <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-CN_doubanFM"></i>
                    <span>亲子频道</span>
                </div>
            </div>
            <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-CN_doubanFM"></i>
                    <span>小冰电台</span>
                </div>
            </div>
            <div class="popst ">
                <div class="dlu">
                    <i class="iconfont icon-CN_doubanFM"></i>
                    <span>优惠券</span>
                </div>
            </div>
             <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-CN_doubanFM"></i>
                    <span>加入网易云人</span>
                </div>
            </div>
             <div class="popst xy">
                <div class="dlu">
                    <i class="iconfont icon-CN_doubanFM"></i>
                    <span>分享网易云音乐</span>
                </div>
            </div>
             <div class="popst">
                <div class="dlu">
                    <i class="iconfont icon-CN_doubanFM"></i>
                    <span>关于</span>
                </div>
            </div>
           
        </section>
         <div class="btn">退出登录</div>
    </div>
</template>

<script>
import '../assets/font/iconfont'
export default {
    name:'myly',
    methods:{
        vips(){
            this.$router.push('/vinyl')
        }
    }
}
</script>
