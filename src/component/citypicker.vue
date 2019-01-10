<template>
  <div>
    <div class="serves" @click="sign">
      <span>
        当前驾照签发城市
        <b @click="print">?</b>
      </span>
      <p>
        <span>{{city.join('')}}</span>
      </p>
    </div>
    <div class="serves" @click="costClick">
      <span>
        可换补的签发城市
        <b>?</b>
      </span>
      <p>
        <span>{{cost.join('')}}</span>
      </p>
    </div>
    <div>
      <van-popup v-model="provy" position="bottom">
        <van-picker
          :columns="cityColumns"
          ref="cityPicker"
          show-toolbar
          @cancel="cancel"
          @confirm="confirm"
          @change="onChange"
        />
      </van-popup>
    </div>
    <div>
      <van-popup v-model="flag" position="bottom">
        <van-picker :columns="costColumns" ref="costPicker" show-toolbar @cancel="cancel1"@change="onChange1"
          @confirm="confirm1"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Citypicker",
  data() {
    return {
      provy: false,
      cityColumns: [],
      flag: false,
      costColumns: [],
      list: []
    };
  },
  created() {
    // 获取签发城市，然后更新选择配置
    this.getCityList().then(res => {
      this.cityColumns = [
        {
          values: this.cityList.map(item => item.name)
        },
        {
          values: this.cityList[0].list.map(item => item.name)
        }
      ];
      //console.log(this.cityList,'ndkjf')
    });
  },
  computed: {
    ...mapState({
      cityList: state => state.citypicker.cityList,
      city: state => state.citypicker.city,
      costList: state => state.citypicker.costList,
      cost: state => state.citypicker.cost
    })
  },
  methods: {
    ...mapMutations({
      updateState: "citypicker/updateState"
    }),
    ...mapActions({
      getCityList: "citypicker/getCityList",
      getCostList: "citypicker/getCostList"
    }),
    print() {},
    costClick() {
      if (!this.city.length) {
        alert("请先选择签发地");
      } else {
        this.flag = true;
        this.getCostList().then(res => {
          this.costColumns = [
            {
              values: this.costList.map(item => item.name)
            },
            {
              values: this.costList[0].list.map(item => item.name)
            }
          ];
        });
      }
    },
    cancel() {
      this.provy = false;
    },
    cancel1() {
      this.flag = false;
    },
    confirm(values) {
      this.cancel();
      // 触发mutation更新城市数据
      this.updateState({ city: values });
    },
    confirm1(values) {
      this.cancel1();
      // 触发mutation更新城市数据
      this.updateState({ cost: values });
    },
    onChange(picker, values) {
      // picker.setColumnValues(1, citys[values[0]]);
      //获取当前省份的下标
      let index = this.cityList.findIndex(item => item.name == values[0]);
      let val = this.cityList[index].list.map(item => item.name);
      //console.log(index,values,'index')
      this.$refs.cityPicker.setColumnValues(1, val);
    },
    onChange1(picker, values) {
      // picker.setColumnValues(1, citys[values[0]]);
      //获取当前省份的下标
      let index = this.costList.findIndex(item => item.name == values[0]);
      let val = this.costList[index].list.map(item => item.name);
      //console.log(index,values,'index')
      this.$refs.costPicker.setColumnValues(1, val);
    },
    sign() {
      this.provy = true;
    }
  }
};
</script>

<style>
</style>
