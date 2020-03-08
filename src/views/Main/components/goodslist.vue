<!--  -->
<template>
  <div id="goodslist">
    <div class="banner">
      <p class="animated bounceInLeft">HEELO</p>
      <p class="animated bounceInLeft">
        欢迎来到【江苏大学】校园二手市场。临近毕业季的你，是否有太多的闲置与校友分享，为了追求更好的校园服务，我们打造了一个全新的校园平台——
        <span>江苏大学校园二手市场。</span>这里有更多的闲置分享，更自由的校园话题讨论，你想要的，都在这里。
      </p>
      <p class="animated bounceInLeft">加入江苏大学校园二手市场，你的大学，应更精彩。</p>
    </div>
    <div class="menu" v-for="(items,index) in goodinfo" :key="index">
      <h1>{{items.catename}}</h1>
      <div class="box">
        <div
          @click="goGoodDetail({goodsId:goodses.id,title:items.catename})"
          class="card"
          v-for="(goodses,index) in items.goodses"
          :key="index"
        >
          <img :src="BASEURL+goodses.imgUrl" />
          <span class="price">{{goodses.price}}</span>
          <p>{{goodses.name}}</p>
          <span class="date">{{goodses.polishTime}}</span>
          <span class="mark">江大市场</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getCateLog, getAllCateLog } from "@/api/index.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "goodsList",
  data() {
    //这里存放数据
    return {
      BASEURL: this.BaseUrl.BaseUrl,
      goodinfo: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    GetAllCateLog() {
      getAllCateLog()
        .then(response => {
          this.goodinfo = response.data;
        })
        .catch(error => {});
    },
    goGoodDetail(params) {
      this.goComAndInfos(params);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.GetAllCateLog();
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
#goodslist {
  display: inline-block;
  padding-left: 30px;
  float: right;
  @include webkit(box-sizing, border-box);
  width: 83%;
  .banner {
    background: url("../../../assets/images/back.jpg") no-repeat center;
    width: 100%;
    height: 405px;
    overflow: hidden;
    padding: 50px 0px 0px 60px;
    @include webkit(box-sizing, border-box);
    p {
      width: 800px;
      //   transform: translate(60px);
      text-shadow: rgba(255, 255, 255, 0.8) 1px 1px 0px,
        rgba(0, 0, 0, 0) 2px 2px 3px;
      font-size: 20px;
      line-height: 40px;
      font-weight: bold;
      color: #000;
      text-indent: 2em;
    }
  }
}
</style>