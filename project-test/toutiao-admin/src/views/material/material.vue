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
                    <el-radio-group v-model="collect" size="mini" @change="onCollectChange">
                        <el-radio-button :label="false" >全部</el-radio-button>
                        <el-radio-button :label="true" >收藏</el-radio-button>
                    </el-radio-group>
                    <el-button type="success" size="mini" @click="dialogUploadVisible = true">添加素材</el-button>
                </el-row>
                <el-row :gutter="20">
                    <el-col class="image_item" :xs="12" :sm="6" :md="6" :lg="4"  v-for="(m, index) in materialData" :key="index"  >
                        <el-image
                                style="height: 100px"
                                :src="m.src"
                                fit="cover"></el-image>
                        <div class="image_action">
                            <i  :class="m.is_collected?'el-icon-star-on':'el-icon-star-off'" @click="setCollectType(m.id)"></i>
                            <i  class="el-icon-delete" ></i>
                        </div>
                    </el-col>
                </el-row>
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
        <el-dialog title="上传素材" :visible.sync="dialogUploadVisible" :append-to-body="true">
            <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-dialog>
    </div>

</template>

<script>
    import {getMaterialData} from "../../network/materialData";

    export default {
        name: "material",
        data(){
            return {
                collect:false,
                rootData:[],
                materialData:[],
                page:1,
                pageSize:5,
                dialogUploadVisible:false,
                imageUrl:''
            }
        },
        methods:{
            getmData(collected = false){
                if (this.rootData.length <= 0){
                    this.rootData = getMaterialData(this.page,this.pageSize,collected)
                }

                var aData = this.rootData
                if (collected){
                    aData = this.rootData.filter(item => item.is_collected)
                }
                this.materialData = aData.slice((this.page-1)*this.pageSize,(this.page)*this.pageSize)
            },
            onCollectChange(value){
                this.page = 1
                this.collect = value
                this.getmData(value)
            },
            //分页
            handleCurrentChange(val) {
                this.page = val
                console.log(`当前页: ${val}`);
                this.getmData(this.collect)
            },
            //收藏处理
            setCollectType(id){
                const map = this.rootData.map(item => item.id).indexOf(id)
                console.log(map);
                if (map.is_collected){
                    map.is_collected = false
                }else{
                    map.is_collected = true
                }
                this.rootData.splice((id-1),1,map);
                // console.log(this.rootData);
                this.getmData(this.collect)
            }
        },
        created() {
            this.getmData(false)
        }
    }
</script>

<style scoped>
    .image_item{
        position: relative;
    }
    .image_action{
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 30px;
        left: 9px;
        right: 10px;
        bottom: 5px;
        background-color: rgba(204,204,204,.5);

    }
</style>
