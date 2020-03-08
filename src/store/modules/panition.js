const state = {
    pFlag: true,
    title: "",
    cateId: -1,
    currentPage: 1
}

const getters = {


}
const mutations = {
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

}
const actions = {

}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
