<template>
    <canvas ref="canvas"></canvas>  
</template>

<script>
import a from '../assets/a.jpg'
import {uploadBase64,imgToBase64} from '../api/index'
export default {
    name:'cart',
    computed:{
        canvas(){
           // console.log(this.$refs.canvas,'123')
            return this.$refs.canvas
        },
        context(){
            return this.$refs.canvas.getContext('2d');//在画布上绘图的环境
        }
    },
    methods:{
        async init(){
            let {context,canvas}=this
            //绘制背景
            let img=await this.loadImg(a)
            canvas.width=img.width
            canvas.height=img.height
            context.drawImage(img,0,0,img.width,img.height,0,0,img.width,img.height)
            //绘制头像
            let avatarurl='https://wx.qlogo.cn/mmopen/vi_32/fgQgibiagpricjhaKdicYyXHamVjF0ZQVIaicXJvHCwNb2QjickTb6U0ROLa0pgfMkk7P0sNkvZQMWCfMyKvwAJL7vxA/132'
            let res=await imgToBase64(avatarurl)
            console.log('rasdabsj---',res); 
            let avater=await this.loadImg(res.data.base64)
            console.log(res.data.base64,'res')
            

            //绘制圆形边框
          
            context.beginPath()
            context.lineWidth=10
            context.strokeStyle='red'
            context.save()
            context.arc(142,800,40,0,2*Math.PI)
            this.context.clip();
            context.stroke()
            context.drawImage(avater,0,0,avater.width,avater.height,98,755,86,86)
            context.restore()
            context.closePath()

            //绘制文本
            context.font='bold 30px Arial'
            context.fillStyle='#000'
        let widthtext=context.measureText('欢迎收看')
            context.fillText('欢迎收看' ,140-widthtext.width/2,880)

            //生成图片
            let base64=canvas.toDataURL('image/jpeg',0.6)
            let upload=await uploadBase64(base64)
        },
        loadImg(src){
            return new Promise((resolve,reject)=>{
                let img=new Image()
                img.src=src
                img.onload=()=>{
                    resolve(img)
                }
                img.onerror=()=>{
                    reject()
                }
            })
        }
    },
    mounted(){ 
        this.init()






































    //     let img=new Image();
    //     let profile=new Image();
    //     img.src=a
    //     profile.src='https://wx.qlogo.cn/mmopen/vi_32/fgQgibiagpricjhaKdicYyXHamVjF0ZQVIaicXJvHCwNb2QjickTb6U0ROLa0pgfMkk7P0sNkvZQMWCfMyKvwAJL7vxA/132'
    //     img.onload=()=>{
    //         this.canvas.width=img.width
    //         this.canvas.height=img.height
    //         this.context.drawImage(img,0,0,img.width,img.height,0,0,img.width,img.height)
    //          this.context.font = '24px Arial';
    //          this.context.fillStyle = '#000';
    //          let txtwidth=this.context.measureText('华东dsggf师范')
             
    //          this.context.fillText('华东dsggf师范',140-txtwidth.width/2, 860)

    //          //this.context.restore()
    //         this.context.beginPath()
    //         this.context.arc(155,790,35,0,2*Math.PI);
    //         this.context.lineWidth=8
    //         this.context.strokeStyle = "#e3e3e3";
    //         this.context.stroke()
    //         this.context.clip();
    //         this.context.drawImage(profile,0,0,profile.width,profile.height,120,720,profile.width-20,profile.height-20)
    //         this.context.closePath();
    //   }
    }
    
}

</script>

<style>
   canvas{
       width:100%;
       height: 100%;
   }
</style>
