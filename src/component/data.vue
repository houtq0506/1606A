<template>
    <div class="wrapp">
        <header>
            <p>车轮</p>
            <i @click="bolts">X</i>
        </header>
        <ul class="uls">
            <li>首页</li>
             <li>首页</li>
              <li>首页</li>
               <li>首页</li>
                <li>首页</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Data",
  methods: {
    bolts() {
      this.$router.push("/car");
    }
  }
};
</script>

<style>
.wrapp {
  width: 100%;
  height: 100%;
  background: #0099f8;
}
header {
  width: 100%;
  padding: 1%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 26px;
}
.uls{
    width: 100%;
    color:#fff;
}
.uls>li{
    width: 92%;
    margin: 0 auto;
    line-height: 90px;
    font-size: 24px;
    border-bottom: solid 1px #fff;
}
</style>
