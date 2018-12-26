<template>
    <div class="box">
        <div class="top">手机号登录</div>
        <div class="inp">
            <input type="text" @change='inps' placeholder="手机号">
        </div>
        <div class="pasa">
            <input type="text" @change='pas' placeholder="密码">
        </div>
        <p style="color:red;height:40px;line-height:40px;">{{tips}}</p>
        <button @click='chose'>登录</button>
        
    </div>
</template>

<script>
export default {
    name:'Enroll',
    data(){
        return{
            val:'',
            num:'',
            tips:''
        }
    },
    methods:{
        inps(e){
           this.val=e.target.value
        },
        pas(e){
           this.num=e.target.value
        },
        chose(){
            if(this.val!='123456'){
                this.tips='手机号错误'
            }else if(this.num!='12345'){
                this.tips='密码错误'
            }else{
                this.tips='登录成功'
            }
        }
    }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
   .box{
       width: 100%;
       height: 100%;
   }
   .top{
       width: 100%;
       height: 30px;
       line-height: 30px;
       text-align: center;
       color:#fff;
       background:#666;
   }
   .inp{
       width: 100%;
       height: 30px;
      
   }
   .inp>input{
       width: 100%;
       height: 100%;
       border-bottom: 1px #ccc solid;
   }
   .pasa{
        width: 100%;
       height: 30px;

   }
   .pasa>input{
        width: 100%;
       height: 100%;
        border-bottom: 1px #ccc solid;
   }
   button{
       width:85%;
       height: 35px;
       margin:20px 0 0 10px;
       box-sizing: border-box;
       background: #666;
       text-align: center;
       line-height: 35px;
      
       border-radius: 10px;
   }
</style>
