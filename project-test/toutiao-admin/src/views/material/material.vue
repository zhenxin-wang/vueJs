<template>
    <div class="article-container">
        <el-card >
            <div slot="header">
                <el-breadcrumb  separator-class="el-icon-arrow-right" separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>内容管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div>
                <el-row style="padding-bottom: 20px"  type="flex" justify="space-between">
                    <el-radio-group v-model="radio" size="mini">
                        <el-radio-button label="1">全部</el-radio-button>
                        <el-radio-button label="2">收藏</el-radio-button>
                    </el-radio-group>
                    <el-button type="success" size="mini">添加素材</el-button>
                </el-row>
                <el-row :gutter="20">
                    <el-col :xs="12" :sm="6" :md="6" :lg="4"  v-for="(m, index) in materialData" :key="index"  >
                        <el-image
                                style="height: 100px"
                                :src="m.src"
                                :fit="cover"></el-image>
                    </el-col>
                </el-row>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="33"
                        :page-size="pageSize"
                        :current-page="page"
                        @current-change="handleCurrentChange"
                        :disabled="loading"
                        style="margin-top: 30px"
                >
                </el-pagination>
            </div>

        </el-card>
    </div>
</template>

<script>
    import {getMaterialData} from "../../network/materialData";

    export default {
        name: "material",
        data(){
            return {
                radio:'1',
                materialData:[],
                page:1,
                pageSize:5
            }
        },
        methods:{
            getmData(){
                this.materialData = getMaterialData(this.page,this.pageSize)
            }
        },
        created() {
            this.getmData()
        }
    }
</script>

<style scoped>

</style>
