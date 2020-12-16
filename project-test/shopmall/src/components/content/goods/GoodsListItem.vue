<template>
    <div class="goodItem">
        <img class="itemImg" :src="goodsItem.img" alt="">
        <div class="content">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props:{
            goodsItem:{
                type: Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .goodItem{
        /*padding-bottom: 40px;*/
    }
    .itemImg{
        width: 100%;
        border-radius: 5px;
    }
    .content{
        /*background-color: red;*/
        font-size: 12px;
        margin-bottom: 10px;
    }
</style>
