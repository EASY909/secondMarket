<!--  -->
<template>
  <div id="content">
    <div id="nav">
      <ul>
        <li v-for="(items,index) in catelog" :key="index" @click="GetGoodsById(items.id)">
          <svg-icon :iconClass="'one'+index" class="one" />
          <span>{{items.name}}</span>
        </li>
        <p>关于我们|联系我们</p>
        <p>©2020 江苏大学校园二手市场</p>
      </ul>
    </div>

    <GoodsList v-if="paniationFlag" />
    <Paniation :cateId="cateId" v-else />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getCateLog } from "@/api/index.js";
import GoodsList from "./goodslist";
import Paniation from "./goodspaniation";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { GoodsList, Paniation },
  data() {
    //这里存放数据
    return {
      catelog: [],
      iconClass: "",
      // paniationFlag: true,
      cateId: -1
    };
  },
  //监听属性 类似于data概念
  computed: {
    paniationFlag() {
      return this.$store.state.pFlag;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    GetCateLog: function() {
      getCateLog()
        .then(Response => {
          this.catelog = Response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    GetGoodsById: function(id) {
     
      this.cateId = id;
      // this.paniationFlag=this.$store.state.pFlag
      this.$store.commit("SETPFlag", false);
   
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.GetCateLog();
    // console.log(this.$store.state.count)
    // console.log(this.$store.getters.count)
    // this.$store.commit("SETCOUNT",100)
    //  this.$store.dispatch('SETACTION',{name:"qc"})
  },
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
#nav {
  width: 200px;
  position: fixed;
  top: 130px;
  display: inline-block;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  li {
    &:hover {
      background-color: #e1e1e1;
    }
    height: 50px;
    font-size: 18px;
    text-align: center;
    vertical-align: middle;
    padding: 20px;
    @include webkit(box-sizing, border-box);
    @include webkit(transition, all 0.3s ease 0s);
    cursor: pointer;
  }

  p {
    font-size: 12px;
    color: #aaa;
    padding: 10px 0;
    text-align: center;
  }
}
</style>