<template>
    <el-container class="container">
        <el-aside width="200px" class="aside">
            <div class="logo_div">
                <img class="logo" src="@/assets/logo_index.png" alt="">
            </div>
            <left-menu />
        </el-aside>
        <el-container>
            <el-header class="">
                <div class="header">
                    <div class="header_title">
<!--                        el-icon-s-unfold-->
                        <i class="el-icon-s-fold"></i>
                        <span>迪曼森科技</span>
                    </div>

                    <div>
                        <el-dropdown>
                            <div class="avatar-wrap">
                                <img :src="user.img" alt="">
                                <span>{{user.name}}</span>
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>设置</el-dropdown-item>
                                <el-dropdown-item>退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import LeftMenu from './leftMenu'
    export default {
        name: "home",
        components:{LeftMenu},
        data(){
            return {
                user: {}
            }
        },
        created() {
            this.getUserData()
        },
        methods:{
            getUserData(){
                this.user = {'name':'zhangsan','img':'http://www.baidu.com/img/bdlogo.png'}
            }
        }

    }
</script>

<style scoped>
    .container{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .aside{
        display: flex;
        flex-direction: column;
    }
    .logo_div{
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
        height: 50px;
    }
    .logo{
        width: 80%;
        height: auto;
    }
    .header{
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    .header_title{
        padding-left: 30px;
    }
    .avatar-wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 30px;
    }
    .avatar-wrap img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 5px;
    }
</style>
