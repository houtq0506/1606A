<template>
    <div>
        <div class="tp"></div>
        <input type="file" accept="image/png,image/jpg,image/jpeg,image/gif" @change='pics'/>上传图片
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
import {unloadBase} from '../api/index'
export default {
    name:'index',
    methods:{
        pics(e){
            console.log(e.target.files[0].size,'size')
            //使用FileReader接口的readAsDataURL方法实现图片的预览
            let file=e.target.files[0]//30720
            if(file.size>30*1024){
                //转成64
                let reader=new FileReader()
                //FileReader对象的readAsDataURL方法可以将读取到的文件编码成Data URL
                 reader.readAsDataURL(file);
                 reader.onload=res=>{
                     //console.log(res.target.result,'res')
                     let img=new Image()
                      img.src=res.target.result
                      img.onload=async ()=>{
                          //document.querySelector('.tp').appendChild(img)
                          let canvas=document.querySelector('#canvas');
                          let context=canvas.getContext('2d');
                          canvas.width=img.width
                          canvas.height=img.height
                          context.drawImage(img,0,0,img.width,img.height,0,0,img.width,img.height)
                          let base64=canvas.toDataURL();
                          let res=await unloadBase(base64)

                          //canvas
                          let base65=canvas.toDataURL('image/jpeg',0.1)
                          let res2=await unloadBase(base65)
                      }
                        // let base64 = canvas.toDataURL();
                        // let res = await uploadBase64(base64)
                 }
            }
        }
    }
}
</script>

<style>

</style>
