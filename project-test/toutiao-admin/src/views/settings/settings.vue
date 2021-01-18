<template>
    <div class="settings-container">
        <el-card >
            <div slot="header">
                <el-breadcrumb  separator-class="el-icon-arrow-right" separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>个人设置</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div>
                <el-row>
                    <el-col :span="16">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="编号" prop="id">
                                {{ruleForm.id}}
                            </el-form-item>
                            <el-form-item label="手机" prop="mobile">
                                {{ruleForm.mobile}}

                            </el-form-item>
                            <el-form-item label="媒体名称" prop="mediaName">
                                <el-input v-model="ruleForm.mediaName"></el-input>
                            </el-form-item>
                            <el-form-item label="媒体介绍" prop="mediaInfo">
                                <el-input type="textarea" v-model="ruleForm.mediaInfo"></el-input>
                            </el-form-item>
                            <el-form-item label="邮箱" prop="email">
                                <el-input v-model="ruleForm.email"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">保存设置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col  :span="4" :offset="2" >
                        <el-avatar shape="circle"
                                   :size="150"
                                   fit="cover"
                                   :src="userPhoto">
                        </el-avatar>
                        <p style="width: 150px;text-align: center"
                        @click="$refs.file.click()">点击修改头像</p>
                        <input type="file" hidden ref="file" @change="onFileChange"></input>
                    </el-col>
                </el-row>

            </div>
        </el-card>

        <el-dialog
                title="修改头像"
                :visible.sync="dialogVisible"
                width="30%"
                :append-to-body="true"
                @opened="onDialogOpened"
                @closed="onDialogClosed"
        >
            <div class="preview-image-warp">
                <img class="preview-image" :src="previewImage" slot="" ref="preview-image">
            </div>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="onUpdatePhoto">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>

    import 'cropperjs/dist/cropper.css'
    import Cropper from 'cropperjs'
    import GlobalBus from '../../utils/global-bus'
    export default {
        name: "settings",

        data() {
            return {
                ruleForm: {
                    id: '1',
                    mobile: '15111111111',
                    mediaName: '',
                    mediaInfo: '',
                    email: '',

                },
                dialogVisible:false,
                previewImage:'',
                userPhoto:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                cropper:null,//裁切器对象
                rules: {
                    mediaName: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    mediaInfo: [
                        { required: true, message: '请输入媒体介绍', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'change' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ]

                }
            };
        },
        methods:{
            onFileChange(){
                //解决选择想通文件不出发change事件问题
                const blobData = window.URL.createObjectURL(this.$refs.file.files[0])
                this.previewImage = blobData
                this.dialogVisible = true

                this.$refs.file.value = ''
            },
            onDialogOpened(){
                const image = this.$refs['preview-image'];
                if (this.cropper){
                    this.cropper.replace(this.previewImage)
                    return
                }
                this.cropper = new Cropper(image, {
                    aspectRatio: 1,
                    viewMode: 1,
                    dragMode: 'none',
                    // cropBoxMovable: false,
                    // cropBoxResizable: false,
                    background: false,
                    movable: true
                    // crop(event) {
                    //     console.log(event.detail.x);
                    //     console.log(event.detail.y);
                    //     console.log(event.detail.width);
                    //     console.log(event.detail.height);
                    //     console.log(event.detail.rotate);
                    //     console.log(event.detail.scaleX);
                    //     console.log(event.detail.scaleY);
                    // },
                });
            },
            onDialogClosed(){
                // this.cropper.destroy()
            },
            onUpdatePhoto(){
                //上传服务器
                // this.cropper.getCroppedCanvas().toBlob(file => {
                //     console.log(file);
                //     const  fd = new FormData()
                // })
                //直接获取图片
                this.userPhoto = this.cropper.getCroppedCanvas({
                    imageSmoothingQuality: 'high'
                }).toDataURL('image/jpeg')
                this.dialogVisible = false
                GlobalBus.$emit('upDatePhoto',this.userPhoto)
            }

        }
    }
</script>

<style scoped lang="less">
.preview-image-warp {
    .preview-image {
        display: block;
        max-width: 100%;
        height: 200px;
    }
}
</style>
