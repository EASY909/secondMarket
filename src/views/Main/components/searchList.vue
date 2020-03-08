<!--  -->
<template>
  <div id="searchList">
    <div class="menu">
      <div class="box">
        <div
          @click="goGoodDetail({goodsId:goodses.id,title:goodses.name})"
          class="card"
          v-for="(goodses,index) in goodinfo"
          :key="index"
        >
          <img :src="BASEURL+goodses.imgUrl" />
          <span class="price">{{goodses.price}}</span>
          <p>{{goodses.name}}</p>
          <span class="date">{{goodses.startTime}}</span>
          <span class="mark">江大市场</span>
        </div>
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :current-page="current_page"
      :total="count"
      :page-size="limit"
    ></el-pagination>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { searchGoods } from "@/api/index";
export default {
  name: "searcList",
  //import引入的组件需要注入到对象中才能使用

  data() {
    //这里存放数据
    return {
      count: 0,
      limit: 2,
      current_page: this.$store.state.search.currentPage,
      goodinfo: [],
      BASEURL: this.BaseUrl.BaseUrl
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    loadSearch() {
      let reData = {
        goodsInfo: this.$route.params.goodsInfo,
        limit: this.limit,
        page: this.current_page
      };

      searchGoods(reData)
        .then(response => {
          this.goodinfo = response.data;
          console.log();
        })
        .catch(error => {});
    },
    handleCurrentChange(val) {
      // this.GetGoodsById();

      this.$store.commit("search/SETPAGE", val);
      this.current_page = val;
      this.GetGoodsById();
    },
    goGoodDetail(params) {
      this.goComAndInfos(params);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.loadSearch();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
#searchList {
  @include webkit(box-sizing, border-box);
  .menu{
    .card{
      width: 25%;
     
    }
  }
}
</style>