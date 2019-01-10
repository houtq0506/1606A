import JSBridge from '../utils/JSBridge';
//请求封装方法
function sendRequest(url, method = 'GET', data = {}) {
  let params = {
    method,
    headers: {
      'content-type': 'application/json'
    }
  }
  //判断如果是一个post请求,带上请求体信息
  if (method == 'POST') {
    params.body = JSON.stringify(data)
  }
  //判断请求查询url是否携带query
  if (url.indexOf('?') == -1) {
    url += `?_=${+new Date()}`
  } else {
    url += `&_=${+new Date()}`
  }
  //拼接状态登录token
  //url += `&token=${getToken()}`;
  return fetch(url, params)
    .then(res => res.json())
    .then(body => {
      console.log('...body', body)
      return body;
    })
}
export let uploadImg = (type) => {
  return new Promise((resolve, reject) => {
    JSBridge.invoke('device', 'chooseImage', {
      type,
      chooseCallbackName: function (res) {
        resolve(res);
      }
    })
  })
}
//获取签发城市
export let cityList = () => {
  return sendRequest('/api/ExchangeJiaZhao/cityList')
}
//唤醒登录
export let getLogin = () => {
  return JSBridge.invoke('app', 'login', {
    loginCallBackName: () => window.reload()
  })
}
//获取用户是否是VIP用户
// export let isVip = () => {
//   return sendRequest('https://vip.chelun.com/api/status')
// }
//支付
export let goPay = () => {
  JSBridge.invoke('app', 'pay', {
    price: 399.00,
    orderNum: '6486937255092630529',
    channels: ["weixin", "alipay", "baidu"],
    callbackUrl: 'https://h5.chelun.com/2017/update-licence2/order.html'
  })
}

export let costList = (...params) => {
  // console.log(params,'params')
  return sendRequest(`/api/ExchangeJiaZhao/getCostList?order_type=${params[0]}&province_id=${params[1]}&city_id=${params[2]}`)
}
//分享
export let goShare = () => {
  JSBridge.invoke("ui","shareMessage")
}
//上传base64
export let uploadBase64=(base64)=>{
  return sendRequest('http://123.206.55.50:11000/upload_base64','POST',{base64})
}
//图片转成base64
export let imgToBase64=(url)=>{
  return sendRequest('http://123.206.55.50:11000/tobase64','POST',{url})
}