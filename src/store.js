import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pFlag:true
  },
  getters:{
    
  },
  mutations: {
    SETPFlag(state,value){
      state.pFlag=value; 
    }
  },
  actions: {
   
  }
});
