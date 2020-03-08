<!--  -->
<template>
  <div id="goodsinfo" v-if="goodsData!=null">
    <div class="one">
      <p class="title">{{title }}</p>

      <img class="img" :src="BASEURL+goodsData.goods.imgUrl" />

      <div class="info">
        <h1 class="name">{{goodsData.goods.name}}</h1>
        <h2 class="price">{{goodsData.goods.price}}</h2>
        <h2>
          原价：
          <span
            style="text-decoration:line-through;"
            class="realprice"
          >{{goodsData.goods.realPrice}}</span>
        </h2>
        <div class="public">
          <p>
            <span>可讲价</span>
            <img src="../../../assets/images/map.png" />
            <span class="location">江苏大学</span>
          </p>
        </div>
        <div class="publisher-info-title">
          <span>卖家信息</span>
          <hr />
        </div>
        <div class="item-contact">
          <p class="pnologin">
            <a class="elogin">登录</a>
            <span>或</span>
            <a class="eregist">注册</a>
            <span>后查看联系信息</span>
          </p>
        </div>

        <h1 class="polishtime">发布于{{goodsData.goods.startTime}}</h1>
      </div>
    </div>
    <div class="two">
      <h1>商品描述</h1>
      <hr class="hr1" />
      <hr class="hr2" />
      <p>{{goodsData.goods.describle}}</p>
    </div>
    <div class="three">
      <h1>评论</h1>
      <hr class="hr1" />
      <hr class="hr2" />
      <div class="c">
        <!-- <p><span>效力：</span>很不错 </p>
        <p>2018-04-27 10:05:36</p>-->
      </div>

      <div class="doComm">
        <img src="../../../assets/images/comment.png" />
        <textarea id="doComm" placeholder="这里写下评论"></textarea>
        <button>评论</button>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { GetComAndInfos } from "@/api/index";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "goodInfo",

  components: {},
  data() {
    //这里存放数据
    return {
      BASEURL: this.BaseUrl.BaseUrl,
      goodsData: null,
      title:""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    loadGoodsInfo() {
      let resData = {
        goodsId: this.$route.params.goodsid
      };
      this.title=this.$route.params.title
      GetComAndInfos(resData)
        .then(response => {
          this.goodsData = response.data;
          console.log(this.goodsData);
        })
        .catch(error => {});
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.loadGoodsInfo();
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

#goodsinfo .one {
  width: 100%;
  height: 500px;
  margin-top: 85px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

#goodsinfo .two {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

#goodsinfo .three {
  width: 100%;
  height: 300px;
  margin-bottom: 50px;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  overflow-y: scroll;
}

.one .title {
  color: #999;
  padding-left: 20px;
  padding-top: 10px;
  font-size: 14px;
}

.one .img {
  width: 400px;
  height: 400px;
  margin-top: 20px;
  margin-left: 20px;
}

.info {
  float: right;
  margin-right: 100px;
  margin-top: 15px;
}

.info h1:nth-of-type(1) {
  font-size: 24px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 340px;
}

.info h2:nth-of-type(1) {
  font-size: 20px;
  color: #ef5350;
  font-weight: 700;
  margin-bottom: 15px;
}

.info h2:nth-of-type(2) {
  font-size: 16px;
  color: #aaa;
  margin-bottom: 15px;
}

.public {
  margin-bottom: 15px;
}

.public img {
  width: 25px;
  vertical-align: middle;
}

.public span {
  vertical-align: middle;
}

.public p {
  font-size: 16px;
  color: #000;
}

.pnologin {
  font-size: 20px;
  padding-top: 40px;
  box-sizing: border-box;
}

.item-contact {
  width: 280px;
  height: 195px;
}

.item-contact .login {
  margin-top: 5px;
}

.item-contact .login img {
  width: 30px;
  vertical-align: middle;
}

.item-contact .login span {
  font-size: 16px;
  line-height: 40px;
  margin-left: 15px;
  vertical-align: middle;
}

.item-pub-time {
  font-size: 14px;
  color: #999;
}

.eregist,
.elogin {
  cursor: pointer;
  color: #ef5350;
  font-size: 20px;
}

.two h1 {
  padding: 10px 10px 10px 20px;
  color: #000;
  font-size: 20px;
  font-weight: 600;
}

.three h1 {
  padding: 10px 10px 10px 20px;
  color: #000;
  font-size: 20px;
  font-weight: 600;
}

.hr1 {
  border: none;
  border-top: 5px solid #0bb9f8;
  width: 110px;
  display: inline-block;
  margin-left: 10px;
}

.hr2 {
  display: inline-block;
  width: 810px;
  border: none;
  border-top: 2px solid #d9d9d9;
}

.two p {
  line-height: 25px;
  padding: 10px 20px;
  font-size: 16px;
}

.three .comment {
  padding: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  line-height: 25px;
}

.three .comment p span {
  color: #0bb9f8;
}

.three .comment p:last-child {
  font-size: 14px;
  color: #999;
}

.doComm {
  margin-bottom: 20px;
}

.doComm img {
  width: 40px;
  float: left;
  margin-top: 20px;
  margin-left: 20px;
}

textarea {
  width: 500px;
  height: 100px;
  border: 1px solid #000;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 16px;
}

.bnologin {
  border: none;
  border-radius: 2px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  outline: 0;
  padding: 0 2rem;
  text-transform: uppercase;
  vertical-align: middle;
  margin-left: 50px;
  margin-bottom: 35px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.blogin {
  border: none;
  border-radius: 2px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  outline: 0;
  padding: 0 2rem;
  text-transform: uppercase;
  vertical-align: middle;
  margin-left: 50px;
  margin-bottom: 35px;
  color: #fff;
  background-color: #0bb9f8;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.addfocus,
.pay {
  margin-top: 10px;
  margin-left: 10px;
}
</style>