<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <scroll class="scroll_content">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control"
                   @itemClick="tabClick"
                   :titles="['流行','新款','精选']" >
      </tab-control>
      <goods-list :goods="getshowGoodList"></goods-list>
    </scroll>

  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childComps/HomeSwiper";
    import Scroll from "components/common/scroll/Scroll";

    import {getHomeMultidata,getHomeData} from "network/home";
    import {NEW, POP, SELL, BACKTOP_DISTANCE} from "@/common/const";

    import RecommendView from "./childComps/RecommendView";
    import FeatureView from './childComps/FeatureView'
    import TabControl from "components/content/tabControl/TabControl";
    import GoodsList from "components/content/goods/GoodsList";
    export default {
      name: "Home",
      data(){
        return {
          banners: [],
          dkeyword: [],
          keywords: [],
          recommends: [],
          goodsList: {
            'pop': {
              page: 1,
              list: [
                      {'img':"http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",'title':'aaa','price':'1.11','cfav':5},
                      {'img':"http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",'title':'aaa','price':'1.11','cfav':5},
                      {'img':"http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",'title':'aaa','price':'1.11','cfav':5},
                      {'img':"http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",'title':'aaa','price':'1.11','cfav':5},
                      {'img':"http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",'title':'aaa','price':'1.11','cfav':5},
                      {'img':"http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",'title':'aaa','price':'1.11','cfav':5},
                      {'img':"http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",'title':'aaa','price':'1.11','cfav':5},
                    ]
            },

            'new': {
                      page: 1,
                      list: [
                        {'img':"http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg",'title':'aaa','price':'1.11','cfav':5},
                        {'img':"http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg",'title':'aaa','price':'1.11','cfav':5},
                        {'img':"http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg",'title':'aaa','price':'1.11','cfav':5},
                        {'img':"http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg",'title':'aaa','price':'1.11','cfav':5},
                        {'img':"http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg",'title':'aaa','price':'1.11','cfav':5},
                        {'img':"http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg",'title':'aaa','price':'1.11','cfav':5},
                        {'img':"http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg",'title':'aaa','price':'1.11','cfav':5},
          ]
            },
            'sell': {
              page: 1,
              list: [
                {'img':"http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg",'title':'aaa','price':'1.11','cfav':5},
                {'img':"http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg",'title':'aaa','price':'1.11','cfav':5},
                {'img':"http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg",'title':'aaa','price':'1.11','cfav':5},
                {'img':"http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg",'title':'aaa','price':'1.11','cfav':5},
                {'img':"http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg",'title':'aaa','price':'1.11','cfav':5},
                {'img':"http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg",'title':'aaa','price':'1.11','cfav':5},
                {'img':"http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg",'title':'aaa','price':'1.11','cfav':5},
                {'img':"http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg",'title':'aaa','price':'1.11','cfav':5},
              ]
            }
          },

          currentType: POP
        }
      },
      components: {
        RecommendView,
        NavBar,
        HomeSwiper,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll
      },
      created() {//创建组件时调用
        this.getHomeMultidata()

        // this.getHomeData('pop')
        // this.getHomeData('new')
        // this.getHomeData('sell')
      },
      computed:{
        getshowGoodList(){
          return this.goodsList[this.currentType].list
        }
      },
      methods: {
        getHomeMultidata(){
            getHomeMultidata().then(res =>{
              console.log(res);
              this.banners = res.data.banner.list
              this.recommends = res.data.recommend.list

            })
        },
        getHomeData(type){
          const page = this.goodsList[type].page
          getHomeData(type,page).then(res =>{
            console.log(res);
            // this.goodsList[type].page += 1
            // this.goodsList[type].list.push(...res.data.list)//追加数据到list
          })
        },
        tabClick(index){
          switch (index) {
            case 0:
              this.currentType = POP
              break
            case 1:
              this.currentType = NEW
              break
            case 2:
              this.currentType = SELL
              break
          }
        },

      }
    }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    /*position: relative;*/
  }
  .home-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
  .scroll_content{
    /*height: 300px;*/
    /*overflow: hidden;*/
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
