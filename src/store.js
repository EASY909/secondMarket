import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pFlag: true,
    title:"",
    cateId:-1,
    currentPage:1
  },
  getters: {

  },
  mutations: {
    SETPFlag(state, value) {
      state.pFlag = value;
    },
    SETTITLE(state, value) {
      state.title = value;
    },
    SETPCATEID(state, value) {
      state.cateId = value;
    },
    SETPAGE(state, value) {
      state.currentPage = value;
    },
  },
  actions: {

  }
});
