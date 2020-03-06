import Vue from "vue";
import Router from "vue-router";
import navGoods from "@/views/Main/components/content.vue";
import goodsInfo from "@/views/Main/components/goodsInfo.vue";
Vue.use(Router);

export default new Router({
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
                    path: "/index/goodsinfo",
                    name: "goodsinfo",
                    meta: {
                        name: '商品信息'
                    },
                    component: goodsInfo
                }
            ]
        }
    ]
});
