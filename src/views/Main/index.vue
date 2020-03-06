<!--  -->
<template>
  <div id="index">
    <Header></Header>
    <!-- <Nav></Nav> -->
    <Main></Main>
  </div>
</template>

<script>
import Header from "./components/header";

import Main from "./components/main";
export default {
  name: "index",
  components: {
      Header,Main
  }
};
</script>

<style  lang="scss">
/* @import url(); 引入css类 */
#index{
    margin: 0 auto;
    overflow: hidden;
    width: 1200px;
}
</style>