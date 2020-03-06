
export default {
    install(Vue, options) {
        Vue.prototype.getComAndInfos = function (params) {
            console.log(params)
           this.$router.push({ name: "goodsinfo" });
        }
    }
}