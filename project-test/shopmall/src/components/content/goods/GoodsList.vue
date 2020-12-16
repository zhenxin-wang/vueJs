<template>
    <div class="goods">
        <goods-list-item class="goodItem" v-for="item in goods" :goods-item="item"></goods-list-item>
    </div>
</template>

<script>
    import GoodsListItem from "./GoodsListItem";
    export default {
        name: "GoodsList",
        components: {
            GoodsListItem
        },
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .goods{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
    }
    .goodItem{
        width: 49%;
    }

</style>
