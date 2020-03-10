import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import panition from "./modules/panition.js";
import search from "./modules/search.js";
import login from "./modules/login"

export default new Vuex.Store({
    modules: {
        panition,
        search,
        login
    }
});
