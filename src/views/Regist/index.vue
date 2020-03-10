<!--  -->
<template>
  <div id="regist">
    <!-- <el-button type="text" @click="regist = true">打开嵌套表单的 Dialog</el-button> -->

    <el-dialog
      title="欢迎加入江大二手市场"
      @close="close"
      :modal-append-to-body="false"
      :visible.sync="dialogFormVisible"
      center
      width="30%"
    >
      <el-form ref="form" :model="form">
        <el-form-item label="昵称" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
          <el-input show-password v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="DoRegist" type="primary">点击注册</el-button>
        <p>
          已有账号？去
          <span class="login" @click="goLogin">登录</span>吧！
        </p>
      </span>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { doRegist } from "@/api/login.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "registindex",

  props: {
    registFlag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    //这里存放数据
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        password: "",
        phone: ""
      },
      formLabelWidth: "100px"
    };
  },
  //监听属性 类似于data概念
  //   computed: {
  //     dialogFormVisible(nv, ov) {
  //       return;
  //     }
  //   },
  //监控data中的数据变化
  watch: {
    // registFlag(nv,ov) {
    //     console.log(1)
    //     this.dialogFormVisible = nv;
    // }
    registFlag(nv, ov) {
      this.dialogFormVisible = nv;
    }
  },
  //方法集合
  methods: {
    close() {
      this.dialogFormVisible = false;
      this.$emit("update:registFlag", false);
    },
    goLogin() {
      this.dialogFormVisible = false;
      this.$emit("update:registFlag", false);
      this.$emit("goLogin", true);
    },
    DoRegist() {
      let requestData = {
        username: this.form.name,
        phone: this.form.phone,
        password: this.form.password
      }

      
      doRegist(requestData)
        .then(response => {
          //console.log(response);
          this.$message({
            message: "注册成功！",
            type: "success"
          });
          this.goLogin();
        })
        .catch(error => {
          this.$message.error("用户名重复！");
          console.log(this.$refs);
          this.$refs['form'].resetFields();
        });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // console.log(this.$props.registFlag);
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

#regist {
  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .login {
    color: red;
    cursor: pointer;
    font-size: 18px;
  }
}
</style>