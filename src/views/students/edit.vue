<template>
    <div id="app" v-if="form">
        <el-breadcrumb>
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>编辑学生</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" clearable>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" clearable prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item label="角色" prop="role">
                <el-radio v-for="(item,index) in role" :key="index" v-model="form.role" :label="item">
                </el-radio>
            </el-form-item>
            <el-form-item>
                <el-table-column
                        label="操作"
                        width="300">
                    <template slot-scope="scope">
                        <div>
                            <el-button>
                                编辑
                            </el-button>
                            <el-button @click="deleteStudents(scope.row.id)">删除</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "edit",
        data: function () {
            return {
                form: null,
                classes: [
                    {cid: 1, cname: 'wuif1907-1'},
                    {cid: 2, cname: 'wuif1907-2'},
                    {cid: 3, cname: 'wuif1907-3'}
                ],
                id: 0,
            }
        },
        methods: {
            getStudent() {
                //到本地拿数据
                let obj = JSON.parse(localStorage.getItem('fs'));
                if (obj) {
                    this.form = obj;
                } else {
                    this.$message.error('数据获取失败');
                }
            }
        },
        beforeMount() {
            this.id = this.$route.params.id;
            //获取当前学生信息
            this.getStudent();
        }
    }
</script>

<style scoped>

</style>