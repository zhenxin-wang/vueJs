<template>
    <el-menu
            default-active="/"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
    >
        <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
            <i class="el-icon-message"></i>
            <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/material">
            <i class="el-icon-picture"></i>
            <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
            <i class="el-icon-document"></i>
            <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
            <i class="el-icon-chat-line-round"></i>
            <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
            <i class="el-icon-view"></i>
            <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/settings">
            <i class="el-icon-user"></i>
            <span slot="title">个人设置</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "leftMenu",
        methods: {

        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo{
        flex-grow: 1;
    }
</style>
