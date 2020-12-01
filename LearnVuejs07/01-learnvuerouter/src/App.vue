<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <router-link to="/home" tag="button"  >首页</router-link>
    <router-link to="/about" tag="button"  >关于</router-link>
  <!--    路由参数传递-->
    <router-link :to="'/user/'+userId" >我的</router-link>
    <router-link :to="{path: '/profile',query:{name:'aaa'}}">档案</router-link>
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
<!--    <button @click="profileClick">档案</button>-->
<!--    <router-view></router-view>&lt;!&ndash;路由渲染占位视图 &ndash;&gt;-->
    <keep-alive exclude="Profile"><!--保持组件生命周期 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick(){
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('/about')
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'dddd',
          age: 19
        }
      })
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
