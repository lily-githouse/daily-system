<template>
    <div class="container">
        <div id="app">
            <!-- 管理员，教师，学生-->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username" clearable>
                        <!--<i slot="prefix" class="el-input__icon el-icon-user-solid></i>-->
                    </el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password" clearable prefix-icon="el-icon-lock"></el-input>
                    <!--                <i ></i>-->
                </el-form-item>
                <el-form-item label="角色" prop="role">
                    <!-- 下拉框选择-->
                    <!--                <el-select v-model="ruleForm.role" placeholder="请选择一个角色">-->
                    <!--                    <el-option label="学生" value="学生"></el-option>-->
                    <!--                    <el-option label="教师" value="教师"></el-option>-->
                    <!--                    <el-option label="管理员" value="管理员"></el-option>-->
                    <!--                </el-select>-->
                    <!-- 单选-->
                    <el-radio v-for="(item,index) in role" :key="index" v-model="ruleForm.role" :label="item">
                    </el-radio>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import admin from "../data/admin";
    import students from "../data/students";
    import teacher from "../data/teacher";
    // import student from "../views/students/student";

    export default {
        name: "login",
        data: function () {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    role: [],
                },
                role: ['教师', '学生', '管理员'],
                rules: {
                    username: [
                        {required: true, message: '请输入用户名称', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 10, message: '长度在6 到 10 个字符', trigger: 'blur'}
                    ],
                    role: [
                        {required: true, message: '请选择一个角色', trigger: 'change'}
                    ],
                },
            }
        },
        // onSubmit() {
        //     // location.replace('/#/main');   //一直跳转到默认的首页
        //     this.$router.push('/main');
        // }
        methods: {
            submitForm(formName) {
                //this指向vue
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let role = this.ruleForm.role;
                        let model = null;
                        if (role == '教师') {
                            model = teacher;
                        } else if (role == '学生') {
                            model = students;
                        } else {
                            model = admin;
                        }
                        // let flag = model.some(ele => ele.username == this.ruleForm.username && ele.password == this.ruleForm.password);
                        //filter方法返回的是筛选之后的新数组，没有返回空数组
                        let flag = model.filter(ele => ele.username == this.ruleForm.username && ele.password == this.ruleForm.password);
                        if (flag.length) {
                         let user=localStorage.user=JSON.stringify(flag[0]);
                          if(role=='学生'){
                              //传user到student主界面，右上角展示用户
                                this.$router.push('/student',user);
                            }
                            if(role=='教师'){
                                this.$router.push('/teacher');
                            }
                            if(role=='管理员'){
                                this.$router.push('/admin');
                            }
                        } else {
                            this.$message.warning('用户名和密码不匹配');
                        }
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }

</script>
<style>
    /*@import '/path/to/u-reset/reset.css';*/


    #container {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-image: url("../assets/logo.png");
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>
<style scoped>
    #app {
        width: 350px;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff;

    }
</style>