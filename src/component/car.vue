<template>
    <div class="wrap">
        <div class="box">
            <div class="top">
                <p>车轮</p>
                <i @click='bolt'>san</i>
            </div>
            <div class="img">
                <img
                    src="http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png"
                    alt=""
                >
            </div>
            <ul class="nav">
                <li>分析评论</li>
                <li>趋势榜单</li>
                <li>研究报告</li>
            </ul>
            <div class="broken">
                <div class="seven_echarts" style=" height:400px" id="seven"></div>
            </div>
        </div>
        <div class="info" @scroll='handleScroll'>
            <header v-if='showing'>
                <div class="lef">车轮</div>
                <ul class="rig">
                    <li>产品</li>
                    <li>关于我们</li>
                    <li>大数据</li>
                    <li>新闻</li>
                    <li>招聘</li>
                    <li>商城</li>
                    <li>登录/注册</li>
                </ul>
            </header>
            <header class="ceil" v-if="bot">
                <div class="lef zuo">车轮</div>
                <ul class="rig boxt">
                    <li>产品</li>
                    <li>关于我们</li>
                    <li>大数据</li>
                    <li>新闻</li>
                    <li>招聘</li>
                    <li>商城</li>
                    <li>登录/注册</li>
                </ul>
            </header>
            <div class="pic">
                <img src="http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png" alt="">
            </div>
            <ul class="nav">
                <li>分析评论</li>
                <li>趋势榜单</li>
                <li>研究报告</li>
            </ul>
            <ol style="height:500px;">
                <li>分析评论</li>
                <li>趋势榜单</li>
                <li>研究报告</li>
                <li>分析评论</li>
                <li>趋势榜单</li>
                <li>研究报告</li>
                <li>分析评论</li>
                <li>趋势榜单</li>
                <li>研究报告</li>
             </ol>
        </div>
    </div>
</template>

<script  type="text/javascript">
//import echarts from "echarts";
export default {
  name: "Car",
  data() {
    return {
      chart: null,
      seven_chart: null,
      month_chart: null,
      scrollTop:0,
      showing:true,
      bot:false,
      seven_option: {
        title: {
        text: '关注指数'
    },
    
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['吉利博越','冠道','本田XR-V','哈佛H6','途观'],
        bottom: 0,
        left: 'center',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan/18','Mar/18','May/18','Jul/18','Sep/18','Nov/18']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'吉利博越',
            type:'line',
            stack: '总量',
            data:[42000, 45000, 47000, 40000, 48000, 47000, 46500,45000,46000, 43000, 42500,42000]
        } ,
        {
            name:'冠道',
            type:'line',
            stack: '总量',
            data:[42000, 41500, 41000, 41000, 42000, 42500,43000,43500,44000,44500,45000,45500]
        },
        {
            name:'本田XR-V',
            type:'line',
            stack: '总量',
            data:[42500, 42000, 41500, 43000, 43500, 42000, 43000, 43000, 41500,41000,42000,45000]
        },
        {
            name:'哈弗H6',
            type:'line',
            stack: '总量',
            data:[41000,44000,43000,41000,41000,40500,40500,40100,40000,43000,41500,42000]
        },
        {
            name:'途观',
            type:'line',
            stack: '总量',
            data:[73000, 79500, 69000, 63000, 62000, 62500, 61000,63500,64000,65000,70000]
       }
    ]
      }
    };
  },
  mounted: function() {
    this.get_echarts();
  window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
  this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  console.log(this.scrollTop)
  if(this.scrollTop>=100){
    this.showing=false
    this.bot=true
  }else{
    this.showing=true
    this.bot=false
  }
},
    get_echarts: function() {
      this.seven_chart = this.echarts.init(document.getElementById("seven"));
      // 把配置和数据放这里
      this.seven_chart.setOption(this.seven_option);
    },
    bolt(){
      this.$router.push('/data');
    }
  },
  beforeDestroy() {
    if (!this.seven_chart) {
      return;
    }
    this.seven_chart.dispose();
    this.seven_chart = null;
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}

.broken {
  width: 100%;
  height: 600px;
}

.img {
  width: 100%;
  height: 10%;
}
.img > img {
  width: 100%;
  height: 100%;
}
.nav {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav > li:nth-child(2) {
  padding: 15px 0;
  border-bottom: solid 2px blue;
}

.wrap {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 1000px) {
  .box {
    width: 100%;
    height: 100%;
  }
  .top {
    width: 100%;
    padding: 3% 1%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .info {
    display: none;
  }
}
@media screen and (min-width: 1001px) {
  .info {
    width: 100%;
    height: 100%;
  }
  header {
    width: 100%;
    padding: 30px 50px;
    display: flex;
    justify-content: space-around;
    background: blue;
    border-bottom: solid 1px blue;
  }
  .ceil{
  width: 100%;
  padding: 20px 48px;
  background:#fff;
  position: fixed;
  top:0;
}
  .lef {
    width: 25%;
  }
  .rig {
    flex: 1;
    display: flex;
  }
  .rig > li {
    flex: 1;
  }
  .pic {
    width: 100%;
    height: 30%;
  }
  .pic > img {
    width: 100%;
    height: 100%;
  }

  .box {
    display: none;
  }
}
</style>
