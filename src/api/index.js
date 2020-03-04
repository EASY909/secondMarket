import service from "@/utils/request.js";

/**
 * 获取所有分类
 */
export function getCateLog() {
    return service.request({
        method: 'post',
        url: '/catelog/getCateLog'
        
    })
}