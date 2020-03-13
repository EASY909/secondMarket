// import service from "@/utils/request.js";
import axios from "axios"
export function getPeoInfos() {
     
    return new Promise((resolve,reject)=>{
        axios({
            method: 'get',
            url: './mock/getPeoInfos.json',
        }).then(response=>{
            resolve(response);
        });
    })
    // return service.request({
    //     method: 'post',
    //     url: '/user/getPeoInfos',
    // })
}