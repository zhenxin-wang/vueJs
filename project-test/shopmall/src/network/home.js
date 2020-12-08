import request from "./request";

//获取首页数据
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}
