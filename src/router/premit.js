import router from "./router";
import {getUsername} from "../utils/app";
router.beforeEach((to, from, next) => {
    if(getUsername()){
        console.log("存在")
    }else{
        console.log("不存在")
    }
 
    next()
})