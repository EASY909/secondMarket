<!--  -->
<template>
  <div id="header">
    <el-row>
      <el-col :span="5" class="pull-left">
        
          <img  @click="changeFlag" src="../../../assets/images/nav.png" />
       
        <h1>江大二手市场</h1>
      </el-col>
      <el-col :span="10">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input style="width:250px;" v-model="search" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch">搜索</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="5" class="pull-right">
        <div class="login">
          <el-button type="danger">我要发布</el-button>
          <span>登录</span>
          <span>注册</span>
        </div>
      </el-col>
      
    </el-row>
  </div>
</template>

<script>

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      search: "111"
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onSearch: () => {

    },
    changeFlag(){
      this.$store.commit("SETPFlag", true);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
#header {
  background-color: #fff;
  width: 1190px;
  position: fixed;
  top: 0px;
  padding: 20px;
  z-index: 10;
  margin: 0 auto;
  margin-bottom: 30px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  h1 {
    font-size: 30px;
    font-weight: bold;
    vertical-align: middle;
    display: inline;
  }

  img {
    width: 60px;
    height: 65px;
    vertical-align: middle;
    cursor: pointer;
  }

  .el-form {
    margin-top: 10px;
    margin-left: 140px;
  }
  .login {
    margin-top: 10px;
    span {
      font-size: 17px;
      cursor: pointer;
      margin-left: 10px;
    }
  }
}
</style>