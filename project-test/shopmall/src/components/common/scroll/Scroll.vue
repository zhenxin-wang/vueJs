<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        data(){
            return {
                scroll: {}
            }
        },
        mounted() {
            this.$nextTick(() =>{
                this.scroll = new BScroll(this.$refs.wrapper,{

                })
            })

        }
    }
</script>

<style scoped>
.wrapper{
    /*overflow: hidden;*/
}
</style>
