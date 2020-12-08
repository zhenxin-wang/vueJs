<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isSelected"><slot name="item-icon"></slot></div>
    <div v-show="isSelected"><slot name="item-icon-active"></slot></div>
<!--    <div :class="{itemtextClass:isSelected}" ><slot name="item-text"></slot></div>-->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props: {//外部传入参数
        path: {
          type: String,
          required: true//必传
        },
        tabColor:{
          type: String,
          default: '#ff8198'
        }
      },
      computed: {//非data设置的数据，实现页面和数据双向绑定，计算函数
        isSelected(){
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {//设置tabbar title颜色
          return this.isSelected ? {'color': this.tabColor} : {}
        }
      },
      methods: {
        itemClick(){
          console.log(this.path);
          this.$router.replace(this.path)//跳转页面
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    width: 50px;
  }
  .tab-bar-item img{
    height: 20px;
    width: 20px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .tab-bar-item div{
    font-size: 12px;
  }

</style>
