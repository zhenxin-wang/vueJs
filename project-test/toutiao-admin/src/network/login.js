import request from "./request";

export function login(user) {
    return request({
        method: 'POST',
        url:'/mp/v1_0/authorizations',
        data:{
            user
        }
    })

}
