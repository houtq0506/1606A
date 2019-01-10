<template>
    <div class="relay">
        <ul class="rece">
            <li class="engths" @click="contact">
                <span class="eu">联系省市</span>
                <span class="df">{{address.length?address.join(' '):'请输入收货地'}}</span>
            </li>
            <li>
                <span>详细地址</span>
                <input type="text" @click class="one">
            </li>
            <li>
                <span>联系电话</span>
                <input type="text" class="two" @input="tels" placeholder="请输入联系电话">
            </li>
            <li>
                <span>联系人</span>
                <input type="text" class="thr" @change="peop" placeholder="请输入联系人">
            </li>
        </ul>
        <section>
            <div class="bot">
                <img
                    @click="reds"
                    class="hb"
                    src="http://img2.imgtn.bdimg.com/it/u=1570282652,3265779148&fm=26&gp=0.jpg"
                    alt=""
                >
                <img
                    class="kfh"
                    id="cc"
                    src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1706056857,534002427&fm=26&gp=0.jpg"
                    alt=""
                >
            </div>
            <button @click="sharely">跳转分享</button>
            <button @click="surely" class="btn">确认</button>
        </section>
        <div>
            <van-popup v-model="show" overlay position="bottom">
                <van-area
                    :area-list="addressColumns"
                    :columns-num="3"
                    title="选择联系地址"
                    @cacel="cacelAdd"
                    @confirm="confirmAdd"
                />
            </van-popup>
        </div>
        <van-popup v-model="flag">
            <div>
                <img
                    class="imgst"
                    src="http://img2.imgtn.bdimg.com/it/u=1570282652,3265779148&fm=26&gp=0.jpg"
                    alt=""
                >
                <span @click="refuse">残忍拒绝</span>
                <span @click="part">分享红包</span>
            </div>
        </van-popup>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { goShare } from "../api/index";
export default {
  name: "adress",
  data() {
    return {
      show: false,
      addressColumns: {},
      num: null,
      flag: false,
      peops: ""
    };
  },
  computed: {
    ...mapState({
      addressList: state => state.citypicker.addressList,
      address: state => state.citypicker.address
    })
  },
  created() {
    this.getAddressList().then(res => {
      this.addressColumns = this.addressList;
      console.log(this.addressColumns, "ndkjf");
    });
  },
  methods: {
    ...mapMutations({
      updateState: "citypicker/updateState"
    }),
    ...mapActions({
      getAddressList: "citypicker/getAddressList"
    }),
    part() {
      window["CHELUN_SHARE_DATA_WXMESSAGE"] = {
        title: "红包来啦",
        desc: "红包哦",
        imgUrl:
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2542753471,1884565792&fm=27&gp=0.jpg",
        type: "photo是分享大图"
      };
      goShare();
    },
    refuse() {
      this.flag = false;
    },
    sharely() {
      (window["CHELUN_SHARE_DATA_WXTIMELINE"] = {
        description: "还可以吧",
        mediaObject: "WXWebpageObject",
        title: "微信分享",
        link: "https://youzan.github.io/vant/#/zh-CN/picker",
        webpageUrl:
          "https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN"
      }),
        (window["CHELUN_SHARE_DATA_WXMESSAGE"] = {
          title: "微信分享",
          mediaObject: "WXImageObject",
          type: "photo",
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546938713787&di=aac89eadd2c2e4e50a97b7f272d03292&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F16%2F20160516163801_rnfLN.jpeg"
        });
      goShare();
    },
    surely() {
      if (this.num == null || this.peops == "") {
        Toast("请把信息填写完整");
      }
    },
    contact() {
      this.show = true;
    },
    reds() {
      this.flag = true;
    },
    peop(e) {
      this.peops = e.target.value;
    },
    tels(e) {
      this.num = e.target.value;
    },
    cacelAdd() {
        this.show=false;
    },
    confirmAdd(values) {
        console.log(values);
        let newValues=[];
        values.forEach(item=>{
            newValues.push(item.name)
        })
        this.updateState({ address: newValues });
        this.cacelAdd();
    }
  }
};
</script>

<style>
.imgst {
  width: 90%;
  position: relative;
  left: 0;
}
.engths{
    width: 100%;
    display: flex;
}
.eu{
    width: 30%;
}
.df{
    flex:1;
}
.relay {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.rece {
  width: 100%;
  height: 155px;
}
.rece > li {
  width: 96%;
  margin: 0 auto;
  border-bottom: solid 1px #ccc;
  line-height: 38px;
  display: flex;
}
.rece > li > span {
  width: 25%;
  text-align: left;
}
.rece > li > input {
  flex: 1;
  text-align: right;
  padding-right: 10px;
  border: none;
}
section {
  width: 100%;
  flex: 1;
}
.bot {
  width: 100%;
  height: 350px;
  position: relative;
  background: #ccc;
}
.bot > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  display: inline-block;
}
.kfh {
  bottom: 10%;
}
.hb {
  bottom: 30%;
}
.btn {
  width: 100%;
  height: 50px;
  background: #999;
  color: #fff;
  border-radius: 3px;
  line-height: 50px;
  text-align: center;
  position: relative;
  bottom: 0px;
}
</style>
