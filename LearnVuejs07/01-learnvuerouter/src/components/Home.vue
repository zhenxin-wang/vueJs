<template>
  <div>
    <h2>home</h2>
    <p>aaaaaaaaaaaa</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name: "Home",
      data(){
        path:'/home/news'
      },
      //生命周期函数
      created() {//创建组件调用
        console.log('home created');
        // this.$router.push('/home/news')
      },
      // mounted() {//组件挂载上dom后回调
      //   console.log('mounted');
      // },
      // updated() {//页面刷新更新调用
      //   console.log('updated');
      // },
      destroyed() {
        console.log('home destroyed');
      },
      activated() {//活跃组件,和keep-live结合使用
        this.$router.push(this.path)
      },
      // deactivated() {
      //   this.path = '/home/message'
      // }
      beforeRouteLeave(to,from,next){//退出当前活跃组件之前
        this.path = this.$route.path
        next()
      }
    }
</script>

<style scoped>

</style>
