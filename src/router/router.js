import Vue from "vue";
import Router from "vue-router";
import Main from "@/views/Main/index.vue";

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
            meta:{
                name:"首页"
            },
            component: Main
        }
    ]
});
