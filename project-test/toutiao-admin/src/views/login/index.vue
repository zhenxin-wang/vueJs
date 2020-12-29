<template>
    <div class="login-container">
        <div class="content">
            <el-form class="login-form"  :model="user" :rules="rules" ref="user">
                <el-form-item >
                    <img src="../../assets/logo_index.png">
                </el-form-item>
                <el-form-item prop="mobile">
                    <el-input v-model="user.mobile"
                              placeholder="请输入手机号"
                              prefix-icon="el-icon-phone" ></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-input v-model="user.code" placeholder="请输入验证码"
                              prefix-icon="el-icon-setting" ></el-input>
                </el-form-item>
                <el-form-item prop="agree">
                    <el-checkbox v-model="user.agree">我已阅读并统一用户协议和隐私条款</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button class="loginbtn" type="primary" @click="onlogin('user')" :loading="loginloading">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

    export default {
        name: "loginIndex",
        data() {
            return {
                user: {
                    mobile: '123',
                    code: '123',
                    agree: false
                },

                loginloading:false,
                rules: {
                    mobile: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        // {  pattern: /^1[3|5|6|7|8|9]\d{9}$/, message: '请输入正确的手机号', trigger: 'change' }
                    ],
                    code: [
                        { required: true, message: '请输入验证码', trigger: 'change' }
                    ],
                    agree:[
                        { validator: (rule,value,callback) =>{
                                if (!value){
                                    // this.$message({
                                    //     message: '请勾选阅读协议',
                                    //     type: 'warning'
                                    // });
                                    return callback(new Error('请勾选阅读协议'))
                                }else{
                                    return callback()
                                }
                            },
                            trigger: 'change'}
                    ]
                }
            }
        },

        methods: {
            onlogin(user) {
                // login(user).then(res =>{
                //     console.log(res);
                // })
                this.loginloading = true
                setTimeout(()=>{
                    this.$refs[user].validate((valid) => {
                        this.loginloading = false
                        if (valid) {

                            if (this.user.code == '123' && this.user.mobile == '123'){
                                console.log('登陆成功');
                                this.$message({
                                    message: '登陆成功',
                                    type: 'success'
                                });
                                this.$router.push({name:'home'})
                            }else{
                                console.log('登陆失败');
                                this.$message.error('登陆失败');
                            }
                        } else {
                            console.log('error submit!!');
                            return false;
                        }

                    })
                },500)
            }
        }

    }
</script>

<style scoped>
    .login-container{
        /*position: fixed;*/
        /*top: 0;*/
        /*left: 0;*/
        /*right: 0;*/
        /*bottom: 0;*/
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("../../assets/login_bg.jpg") no-repeat ;
        background-size: cover;
        /*background-size: 100% 100%;*/
        height: 100vh;
    }
    .content{
        min-width: 400px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login-form{
        padding: 30px;
    }

    .loginbtn{
        width: 100%;
    }
</style>
