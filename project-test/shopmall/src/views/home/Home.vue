<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childComps/HomeSwiper";

    import {getHomeMultidata} from "network/home";
    import RecommendView from "./childComps/RecommendView";
    export default {
      name: "Home",
      data(){
        return {
          banners: [],
          dkeyword: [],
          keywords: [],
          recommends: []
        }
      },
      components: {
        RecommendView,
        NavBar,
        HomeSwiper
      },
      created() {//创建组件时调用
        this.getHomeMultidata()
      },
      methods: {
        getHomeMultidata(){
            getHomeMultidata().then(res =>{
              console.log(res);
              this.banners = res.data.banner.list
              this.recommends = res.data.recommend.list

            })
          }
      }
    }
</script>

<style scoped>
</style>
