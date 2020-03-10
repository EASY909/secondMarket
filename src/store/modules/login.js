import { doLogin } from "@/api/login.js";
import { setUsername, getUsername,removeUsername} from "@/utils/app";
const state = {
    username: getUsername() || ""
}

const getters = {

}

const mutations = {
    SETUSERNAME(state, value) {
        state.username = value;
    },
    REMOVEUSERNAME(){
        removeUsername();
        state.username="";
    }
}
const actions = {
    login(content, data) {
        // console.log(data)
        return new Promise((resolve, reject) => {
            doLogin(data).then(response => {
                content.commit("SETUSERNAME", data.phone)
                setUsername(data.phone)
                resolve(response);
            }).catch(error => { reject(error) })
        })
    },
    exit(content){
        content.commit("REMOVEUSERNAME") 
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}