import JSBridge from '../utils/JSBridge';
export let uploadImg = (type)=>{
    return new Promise((resolve, reject)=>{
      JSBridge.invoke('device', 'chooseImage', {
        type,
        chooseCallbackName: function(res){
          resolve(res);
        }
      })
    })
  }