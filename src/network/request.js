import Axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = Axios.create({
    // baseURL: "http://222.240.149.178:20021",
    timeout: 5000
  })
  //配置拦截器
  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  }, error => {
    console.log(error)
    return Promise.reject(error)
  })
  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
  },error => {
    console.log(error)
    return Promise.reject(error)
  })
  //发送网络请求并返回
  return instance(config)
}



