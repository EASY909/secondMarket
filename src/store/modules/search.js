const state = {
    currentPage: 1
}

const getters = {


}
const mutations = {
    SETPAGE(state, value) {
        state.currentPage = value;
    }


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
