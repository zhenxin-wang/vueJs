<template>
    <el-container class="container">
        <el-aside width="auto" class="aside">
<!--            <div class="logo_div">-->
<!--                <img class="logo" src="@/assets/logo_index.png" alt="">-->
<!--            </div>-->
            <left-menu :is-collapse="isCollapse"/>
        </el-aside>
        <el-container>
            <el-header class="el-header">
                <div class="header">
                    <div class="header_title">
                    <!--el-icon-s-unfold-->
                        <i :class="{
                            'el-icon-s-unfold':isCollapse,
                            'el-icon-s-fold':!isCollapse
                        }"
                           @click="isCollapse = !isCollapse"></i>
                        <span>迪曼森科技</span>
                    </div>

                    <div>
                        <el-dropdown @command="handleCommand">
                            <div class="avatar-wrap">
                                <img :src="user.img" alt="">
                                <span>{{user.name}}</span>
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="1">设置</el-dropdown-item>
                                <el-dropdown-item command="2">退出</el-dropdown-item>
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
                user: {},
                isCollapse: false

            }
        },
        created() {
            this.getUserData()
        },
        methods:{
            getUserData(){
                this.user = {'name':'zhangsan','img':'http://www.baidu.com/img/bdlogo.png'}
            },
            handleCommand(command){
                console.log(command);
                if (command == 1){

                }else if(command == 2){
                    console.log('aaaaaa');
                    this.$confirm('是否退出登录?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '退出登录成功!'
                        });
                        this.$router.replace({name:'login'})
                    }).catch(() => {
                        // this.$message({
                        //     type: 'info',
                        //     message: '已取消退出登录'
                        // });
                    });



                }
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
        background-color: #545c64;
        margin: 0 1px;
    }
    .logo{
        width: 80%;
        height: auto;
    }
    .el-header{
        border-bottom: 1px solid #ccc;
    }
    .header{
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    }
    .header_title{
        padding-left: 10px;
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
