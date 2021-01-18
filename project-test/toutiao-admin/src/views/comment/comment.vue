<template>
    <div class="comment-container">
        <el-card >
            <div slot="header">
                <el-breadcrumb  separator-class="el-icon-arrow-right" separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>评论管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="title"
                            label="标题">
                    </el-table-column>
                    <el-table-column
                            prop="c_count"
                            label="总评论数">
                    </el-table-column>
                    <el-table-column
                            prop="f_count"
                            label="粉丝评论数">
                    </el-table-column>
                    <el-table-column
                            prop="status"
                            label="状态"
                            >
                        <template slot-scope="scope">
                            {{scope.row.status ? '正常' : '关闭'}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="操作">
                        <template slot-scope="scope">
                            <el-switch
                                    v-model="scope.row.status"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    @change="setBtnTitle(scope.row)">
                            </el-switch>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="this.rootData.length"
                        :page-size="pageSize"
                        :current-page="page"
                        @current-change="handleCurrentChange"
                        style="margin-top: 30px"
                >
                </el-pagination>
            </div>
        </el-card>

    </div>
</template>

<script>
    import {getCommentData} from "../../network/commentData";

    export default {
        name: "comment",
        data(){
            return {
                tableData:[],
                rootData:[],
                page:1,
                pageSize:10,
                value: true
            }
        },
        computed:{

        },
        methods:{
            getCommentDatas(){
                this.rootData = getCommentData()
                var aData = this.rootData
                this.tableData = aData.slice((this.page-1)*this.pageSize,(this.page)*this.pageSize)
            },
            //分页页码处理
            handleCurrentChange(val) {
                this.page = val
                console.log(`当前页: ${val}`);
                this.getCommentDatas()
            },
            commentStatus(row){
                const status = row.status
                if (status == 0){
                    return '正常'
                }else{
                    return '关闭'
                }
            },
            setBtnTitle(row){
                this.commentStatus(row)
            }
        },
        created() {
            this.getCommentDatas()
        }
    }
</script>

<style scoped>

</style>
