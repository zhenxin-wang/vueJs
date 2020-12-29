<template>
    <div class="article-container">
        <el-card >
            <div slot="header">
                <el-breadcrumb  separator-class="el-icon-arrow-right" separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>内容管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div >
                <el-form class="form-content" ref="form" :model="form" label-width="80px">
                    <el-form-item label="状态:">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="全部"></el-radio>
                            <el-radio label="草稿"></el-radio>
                            <el-radio label="待审核"></el-radio>
                            <el-radio label="审核通过"></el-radio>
                            <el-radio label="审核失败"></el-radio>
                            <el-radio label="已删除"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="频道:">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="日期:">
                        <el-date-picker
                                v-model="form.date1"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">筛选</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header">
                根据筛选条件共查询到333条数据:
            </div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="id"
                        label="封面">
                    <template slot-scope="scope">
                        <img :src="scope.row.cover.images" style="width: 100px;height: 100px" alt="">
                    </template>
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="标题">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态展示形态"
                        :formatter="statusFormatter">
                </el-table-column>
                <el-table-column
                        label="状态">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.status == 0">草稿</el-tag>
                        <el-tag type="warning" v-if="scope.row.status == 1">待审核</el-tag>
                        <el-tag type="success" v-if="scope.row.status == 2">审核通过</el-tag>
                        <el-tag type="info" v-if="scope.row.status == 3">审核失败</el-tag>
                        <el-tag type="danger" v-if="scope.row.status == 4">已删除</el-tag>

                    </template>
                </el-table-column>
                <el-table-column
                        prop="begin_pubdate"
                        label="发布时间">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)" circle></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="110"
                    @current-change="handleCurrentChange"
                    >
            </el-pagination>
        </el-card>


    </div>
</template>

<script>
    import {getArticleData} from "../../network/articleData";

    export default {
        name: "articleIndex",
        data(){
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                tableData: [],
                page:0,
                pageCount:5
            }
        },
        methods:{
            onSubmit(){

            },
            getArticleData(page,pageCount){
                this.tableData = getArticleData(page,pageCount)
                console.log(this.tableData);
            },
            //编辑
            handleEdit(index, row) {
                console.log(index, row);
            },
            //删除
            handleDelete(index, row) {
                console.log(index, row);
            },
            //渲染状态内容
            statusFormatter(row){
                const indexStatus = row.status
                if (indexStatus == 0){
                    return '草稿'
                }else if(indexStatus == 1){
                    return '待审核'
                }else if(indexStatus == 2 ){
                    return '审核通过'
                }else if(indexStatus == 3){
                    return '审核失败'
                }else if(indexStatus == 4){
                    return '已删除'
                }else {
                    return '全部'
                }
            },

            handleCurrentChange(val) {
                this.page = val-1
                console.log(`当前页: ${val}`);
                this.getArticleData(this.page,this.pageCount)
            }
        },
        created() {
            this.getArticleData(this.page,this.pageCount)
        }
    }
</script>

<style scoped>
    .box-card{
        margin-top: 20px;
    }
</style>
