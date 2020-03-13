import Vue from "vue";
import Router from "vue-router";
import navGoods from "@/views/Main/components/content.vue";
import goodsInfo from "@/views/Main/components/goodsInfo.vue";
import searchlist from "@/views/Main/components/searchList.vue";
import user from "@/views/User/index.vue";
Vue.use(Router);

export default new Router({
    base:"SecondhandCampus",
    routes: [
        {
            path: "/",
            redirect: "index",
        },
        {
            path: "/index",
            name: "index",
            redirect: "/index/content",
            meta: {
                name: "首页"
            },
            component: () => import("@/views/Main/index.vue"),
            children: [
                {
                    path: "content",
                    name: "content",
                    meta: {
                        name: '内容'
                    },
                    component: navGoods
                },
                {
                    path: "/index/goodsinfo/:goodsid/:title",
                    name: "goodsinfo",
                    meta: {
                        name: '商品信息'
                    },
                    component: goodsInfo
                },
                {
                    path: "/index/searchlist/:goodsInfo",
                    name: "searchlist",
                    meta: {
                        name: '搜索页'
                    },
                    component: searchlist
                }
            ]
        },
        {
            path: "/user",
            name:"user",
            meta:{
                name:"个人中心"
            },
            component: user
        },
    ]
});
