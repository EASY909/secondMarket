import service from "@/utils/request.js";


/**
 * 注册
 */
export function doRegist(data) {
    return service.request({
        method: 'post',
        url: '/user/doRegist',
        data
    })
}

/**
 *登录
 */
export function doLogin(data) {
    return service.request({
        method: 'post',
        url: '/user/doLogin',
        data
    })
}
