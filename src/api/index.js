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

/**
 * 进入首页加载信息
 */
export function getAllCateLog() {
    return service.request({
        method: 'post',
        url: '/goods/getAllCateLog'

    })
}

/**
 * 点击nav获取对应商品列表
 */
export function getGoodsById(data) {

    return service.request({
        method: 'post',
        url: '/goods/getGoodsById',
        data

    })
}

/**
 * 商品详情
 */

export function GetComAndInfos(data) {
    return service.request({
        method: 'post',
        url: '/goods/getComAndInfos',
        data

    })
}
/**
 * 搜索商品
 */

export function searchGoods(data) {
    return service.request({
        method: 'post',
        url: '/goods/searchGoods',
        data

    })
}