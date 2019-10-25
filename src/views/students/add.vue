<template>
    <div>
        <el-form :model="form" ref="form" :rules="rules" label-width="80px">
            <el-form-item label="姓名" prop="username">
                <el-input v-model="form.username" clearable prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio label="男" v-model="form.sex"></el-radio>
                <el-radio label="女" v-model="form.sex"></el-radio>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model="form.age" clearable prefix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item label="班级" prop="classes">
                <el-select v-model="form.classes" placeholder="请选择班级">
                    <el-option
                            v-for="item in classes"
                            :key="item.cid"
                            :label="item.cname"
                            :value="item.cname">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="学号" prop="num">
                <el-input v-model="form.num" clearable prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="tell">
                <el-input v-model="form.tell" clearable prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" clearable prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "add",
        data: function () {
            return {
                form: {
                    id: '',
                    username: '',
                    sex: "",
                    age: '',
                    classes: '',
                    num: '',
                    tell: '',
                    password: ''
                },
                classes: [
                    {cid: 1, cname: 'wuif1907-1'},
                    {cid: 2, cname: 'wuif1907-2'},
                    {cid: 3, cname: 'wuif1907-3'}
                ],
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    age: [
                        {required: true, message: '请输入年龄', trigger: 'blur'},
                        {min: 1, max: 2,trigger: 'blur'}
                    ],
                    classes: [
                        {required: true, message: '请选择班级', trigger: 'change'}
                    ],
                    num: [
                        {required: true, message: '请输入学号', trigger: 'blur'}
                    ],
                    tell: [
                        {required: true,min:11,max:11, message: '请输入正确的电话', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm(){
                // window.console.log(this);
                this.$refs.form.validate((valid)=>{
                    // console.log(this.$refs.form);
                    if(valid){
                        this.form.id=Date.now();   //时间戳动态生成id
                        // let qs=this.form;
                        //将表单中的数据存到本地
                        localStorage.fs=JSON.stringify(this.form);
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .el-form {
        width: 500px;
    }
</style>