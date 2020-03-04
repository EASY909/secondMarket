<!--  -->
<template>
  <div id="nav">
    <ul>
      <li v-for="(items,index) in catelog" :key="index">
        <svg-icon :iconClass="'one'+index" class="one" />
        <span>{{items.name}}</span>
      </li>
      <p>关于我们|联系我们</p>
      <p>©2020 江苏大学校园二手市场</p>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getCateLog } from "@/api/index.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      catelog: [],
      iconClass: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
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
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.GetCateLog();
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