import axios from 'axios'

export default function request(config) {
  const  instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //拦截器
  instance.interceptors.request.use(config =>{
    return config
  },err =>{
    return err
  })
  //响应拦截
  instance.interceptors.response.use(response => {
      return response.data
  },err => {
    return err
  })

  return instance(config)
}
