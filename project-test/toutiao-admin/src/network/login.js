import request from "./request";

export function login(user) {
    request({
        method: 'POST',
        url:'/mp/v1_0/authorizations',
        dat:{
            user
        }
    })

}
