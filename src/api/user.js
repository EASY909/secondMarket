import service from "@/utils/request.js";

export function getPeoInfos() {
    return service.request({
        method: 'post',
        url: '/user/getPeoInfos',
        
    })
}