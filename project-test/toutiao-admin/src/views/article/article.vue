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
                        <el-radio-group v-model="form.status">
                            <el-radio label="null">全部</el-radio>
                            <el-radio label="0">草稿</el-radio>
                            <el-radio label="1">待审核</el-radio>
                            <el-radio label="2">审核通过</el-radio>
                            <el-radio label="3">审核失败</el-radio>
                            <el-radio label="4">已删除</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="频道:">
                        <el-select v-model="form.channelId" placeholder="请选择">
                            <el-option
                                    :label="channel.name"
                                    :value="channel.id"
                                    v-for="(channel,index) in channels"
                                    :key="index"
                            >

                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="日期:">
                        <el-date-picker
                                v-model="form.date1"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd"
                                >
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit()">筛选</el-button>
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
                        <el-image
                                style="width: 100px; height: 100px"
                                :src="scope.row.cover.images"
                                fit="cover" lazy></el-image>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="标题">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="频道"
                        :formatter="channelFormatter">
                </el-table-column>
                <el-table-column
                        label="状态">
                    <template slot-scope="scope">
                        <el-tag :type="articleStatus[scope.row.status].type" >{{articleStatus[scope.row.status].text}}</el-tag>
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
                    :page-size="pageSize"
                    @current-change="handleCurrentChange"
                    >
            </el-pagination>
        </el-card>


    </div>
</template>

<script>
    import {getArticleData,getArticleChannels} from "../../network/articleData";

    export default {
        name: "articleIndex",
        data(){
            return {
                form: {
                    channelId: '',
                    date1: '',
                    status: 'null',
                },
                tableData: [],
                page:0,
                pageSize:5,
                articleStatus:[
                    {status:0,text:'草稿',type:'info'},
                    {status:1,text:'待审核',type:''},
                    {status:2,text:'审核通过',type:'success'},
                    {status:3,text:'审核失败',type:'warning'},
                    {status:4,text:'已删除',type:'danger'}
                ],
                channels:[]
            }
        },
        methods:{
            onSubmit(){
                this.getArticleData(this.page,this.pageSize,this.form)
            },
            getArticleData(page,pageSize,form){
                this.tableData = getArticleData(page,pageSize,form)

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
            channelFormatter(row){
                const indexStatus = row.channel_id
                return this.channels[indexStatus-1].name
            },
            //分页页码处理
            handleCurrentChange(val) {
                this.page = val-1
                console.log(`当前页: ${val}`);
                this.getArticleData(this.page,this.pageSize,this.form)
            },
            //获取频道
            getArticleChannels(){
                this.channels = getArticleChannels()
            }
        },
        created() {
            this.getArticleChannels()
            this.getArticleData(this.page,this.pageSize,this.form)
        }
    }
</script>

<style scoped>
    .box-card{
        margin-top: 20px;
    }
</style>
