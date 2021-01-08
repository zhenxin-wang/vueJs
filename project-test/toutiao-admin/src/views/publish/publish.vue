<template>
    <div class="publish-container">
        <el-card >
            <div slot="header">
                <el-breadcrumb  separator-class="el-icon-arrow-right" separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{optTitle}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div>
                <el-form class="form-content" ref="form" :rules="rules" :model="form" label-width="80px">
                    <el-form-item label="标题:" prop="title">
                        <el-input v-model="form.title"  style="width: 200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="内容:" prop="content">
<!--                        <el-input-->
<!--                                type="textarea"-->
<!--                                :rows="3"-->
<!--                                placeholder="请输入内容"-->
<!--                                v-model="form.content">-->
<!--                        </el-input>-->
                        <el-tiptap
                                v-model="form.content"
                                :extensions="extensions"
                                height="300"
                        />
                    </el-form-item>
                    <el-form-item label="封面:">
                        <el-radio-group v-model="form.cover.type">
                            <el-radio :label="1">单图</el-radio>
                            <el-radio :label="3">三图</el-radio>
                            <el-radio :label="0">无图</el-radio>
                            <el-radio :label="-1">自动</el-radio>
                        </el-radio-group>
                        <el-upload
                                action="#"
                                list-type="picture-card"
                                :auto-upload="false">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{file}">
                                <img
                                        class="el-upload-list__item-thumbnail"
                                        :src="file.url" alt=""
                                >
                                <span class="el-upload-list__item-actions">
                                <span
                                        class="el-upload-list__item-preview"
                                        @click="handlePictureCardPreview(file)"
                                >
                                    <i class="el-icon-zoom-in"></i>
                                </span>
                                <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleRemove(file)"
                                >
                                  <i class="el-icon-delete"></i>
                                </span>
                              </span>
                            </div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="频道:" prop="id">
                        <el-select v-model="form.channel_id" placeholder="请选择">
                            <el-option
                                    :label="channel.name"
                                    :value="channel.id"
                                    v-for="(channel,index) in channels"
                                    :key="index"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('form')">发表</el-button>
                        <el-button @click="addDraft('form')">存入草稿</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
    // import element-tiptap 样式
    // import 'element-tiptap/lib/index.css';
    import {getArticleChannels} from "../../network/articleData";
    import {
        // ElementTiptap,
        // 需要的 extensions
        Doc,
        Text,
        Paragraph,
        Heading,
        Bold,
        Underline,
        Italic,
        Strike,
        ListItem,
        BulletList,
        OrderedList,
    } from 'element-tiptap';

    export default {
        name: "publish",
        components:{
            // 'el-tiptap': ElementTiptap
        },
        data(){
            return {
                extensions: [
                    new Doc(),
                    new Text(),
                    new Paragraph(),
                    new Heading({ level: 5 }),
                    new Bold({ bubble: true }), // 在气泡菜单中渲染菜单按钮
                    new Underline({ bubble: true, menubar: false }), // 在气泡菜单而不在菜单栏中渲染菜单按钮
                    new Italic(),
                    new Strike(),
                    new ListItem(),
                    new BulletList(),
                    new OrderedList()
                ],
                form:{
                    title:'',
                    content:'',
                    cover:{
                        type:0,
                        images:[]
                    },
                    channel_id:null,
                    id:null

                },
                rules: {
                    title: [
                        { required: true, message: '请输入标题', trigger: 'blur' },
                    ],
                    content: [
                        { required: true, message: '请输入内容', trigger: 'blur' }
                    ],
                    id: [
                        { required: true, message: '请选择频道', trigger: 'change' }
                    ]
                },
                channels:[],
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                articleData:{}
            }
        },
        methods:{
            //获取频道
            getChannels(){
                this.channels = getArticleChannels()
            },
            //删除图片
            handleRemove(file) {
                console.log(file);
            },
            //预览图片
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            //提交表单
            onSubmit(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message({
                            type: 'success',
                            message: '发布文章成功!'
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //存入草稿
            addDraft(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message({
                            type: 'success',
                            message: '保存文章成功!'
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
        created() {
            this.getChannels()
        },
        computed:{
            optTitle(){
                if(this.$route.query.type == 'update'){
                    // this.articleData = this.$route.params
                    const data = this.$route.params.data
                    if (data){
                        this.form = data
                    }

                    return '修改文章'
                }else{
                    return '发布文章'
                }
            }
        }
    }
</script>

<style scoped>

</style>
