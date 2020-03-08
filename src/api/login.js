import service from "@/utils/request.js";


/**
 * 获取所有分类
 */
export function doRegist(data) {
    return service.request({
        method: 'post',
        url: '/user/doRegist'
        data
    })
}
