import axios from 'axios'

export default function request(config) {
    const  instance = axios.create({
        baseURL: 'http://ttapi.research.itcast.cn/',
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


// import axios from "axios";
//
// const request = axios.create({
//     baseURL: 'http://ttapi.research.itcast.cn/',
//     timeout: 5000
// })
//
// export default request
