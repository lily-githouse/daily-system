<template>
    <div>
        <el-table :data="students" ref="students">
            <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="username"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="sex"
                    label="性别"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="age"
                    label="年龄"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="classes"
                    label="班级"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="num"
                    label="学号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="tell"
                    label="联系方式"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="password"
                    label="密码"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="300" style="text-align: center">
<!--                想在单元格内访问到表格数据，用作用域插槽-->
                <template slot-scope="scope">
                    <div>
                        <el-button> <router-link :to="{name:'studentedit', params:{id:scope.row.id}}" tag="el-button">编辑</router-link></el-button>
                        <el-button @click="deleteStudents(scope.row.id)">删除</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>


    </div>
</template>

<script>
    import student from "../../data/students";

    export default {
        name: "query",
        data() {
            return {
                //学生数据通过向后台发起请求获得
                students: [],
            }
        },
        methods: {
            getStudents() {          //假设给数据库发送请求，拿回数据
                //将存到本地的数据(JSon格式的字符串)拿出来
                let obj = JSON.parse(localStorage.getItem('form'));
                this.students.push(obj);      //本地数据推到students
                this.students = student;          //展示students.json中的数据
            },
            deleteStudents(id){
                //删掉数组中相等的id，留下不等的，可以用filter
               this.students=this.students.filter(ele=>ele.id!=id);
            }
        },
        //获取最新数据
        mounted() {
            //异步更新
            // window.console.log(this);
            this.getStudents();

        }

    }
</script>

<style scoped>

</style>