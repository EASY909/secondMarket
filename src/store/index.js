import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import panition from "./modules/panition.js";
import search from "./modules/search.js";

export default new Vuex.Store({
    modules: {
        panition,
        search,
    }
});
