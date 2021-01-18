<template>
    <div class="upload-cover">
        <div class="cover-warp" @click="showCoverDialog">
            <img class="cover-image" :src="previewImage" alt="">
        </div>
        <el-dialog
                title="修改头像"
                :visible.sync="dialogVisible"
                :append-to-body="true"
        >
            <div>
                <el-tabs v-model="activeName" type="card" @tab-click="handleTabClick">
                    <el-tab-pane label="素材库" name="first">
                        <div>
                            <el-row style="padding-bottom: 20px"  type="flex" justify="space-between">
                                <el-radio-group v-model="collect" size="mini" @change="onCollectChange">
                                    <el-radio-button :label="false" >全部</el-radio-button>
                                    <el-radio-button :label="true" >收藏</el-radio-button>
                                </el-radio-group>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6" v-for="(m, index) in materialData" :key="index" class="col_image" >
                                    <el-image
                                            class="image_item"
                                            style="height: 100px"
                                            :src="m.src"
                                            fit="cover"
                                            @click="selected = index"
                                    ></el-image>
                                    <div class="selected" v-if="selected === index"></div>
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
                    </el-tab-pane>
                    <el-tab-pane label="上传图片" name="second">
                        <input type="file" ref="file" @change="onFileChange" hidden></input>
                        <img ref="preview-image" :src="previewImage" style="width: 100px " alt="" @click="$refs.file.click()">
                    </el-tab-pane>
                </el-tabs>


            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="onUpdatePhoto">确 定</el-button>
            </span>
        </el-dialog>
    </div>

</template>

<script>
    import {getMaterialData} from "../../../network/materialData";


    export default {
        name: "uploadCover",
        data(){
            return {
                collect:false,
                dialogVisible: false,
                previewImage:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                rootData:[],
                materialData:[],
                page:1,
                pageSize:8,
                activeName:'first',
                selected: null
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
            showCoverDialog(){
                this.dialogVisible = true
            },
            handleTabClick(tab, event){
                console.log(tab, event);
            },
            //显示预览图片
            onFileChange(){
                //解决选择想通文件不出发change事件问题
                const blobData = window.URL.createObjectURL(this.$refs.file.files[0])
                this.$refs['preview-image'].src = blobData
                this.dialogVisible = true
                // this.$refs.file.value = ''
            },
            //上传图片
            onUpdatePhoto(){
                if (this.activeName === 'second'){
                    if (!this.$refs.file.files[0]){
                        this.$message('请选择图片')
                    }else{
                        const blobData = window.URL.createObjectURL(this.$refs.file.files[0])
                        this.previewImage = blobData
                        this.dialogVisible = false
                    }
                }else{
                    if (this.selected == null){
                        this.$message('请选择图片')
                        return
                    }
                    this.previewImage = this.materialData[this.selected].src
                    this.dialogVisible = false
                }
            }
        },
        created() {
            this.getmData()
        }
    }
</script>

<style scoped>
    .cover-warp{
        width: 150px;
        height: 150px;
    }
    .cover-image{
        height: 150px;
        max-width: 100%;
    }
    .col_image{
        position: relative;
    }
    .selected{
        background: url("../../../assets/selected.png") no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>
