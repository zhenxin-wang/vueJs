<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" tag="button" replace >关于</router-link>

    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-view></router-view><!--路由渲染占位视图 -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick(){
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('/about')
    }
  }
}
</script>

<style>
.router-link-active{
  color: red;
}
  .active {
    color: green;
  }
</style>
