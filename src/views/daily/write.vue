<template>
    <!--    填写日报界面应该是一个表单-->
   <div>
       <el-form :model="daily" ref="daily">
           <el-form-item label="座右铭">
               <el-input type="text" v-model="daily.motto" show-word-limit maxlength="16" min-length="10"></el-input>
           </el-form-item>
           <el-form-item label="工作内容">
               <el-input type="textarea" v-model="daily.content" show-word-limit maxlength="30" min-length="10"></el-input>
           </el-form-item>
           <el-form-item label="完成情况">
               <el-input v-model="daily.finish"></el-input>
           </el-form-item>
           <el-form-item label="遇到问题">
               <el-input type="textarea" v-model="daily.problem"></el-input>
           </el-form-item>
           <el-form-item label="心得体会">
               <el-input type="textarea" v-model="daily.feeling" show-word-limit maxlength="30" min-length="10"></el-input>
           </el-form-item>
           <el-form-item label="建议">
               <el-input type="textarea" v-model="daily.suggests" show-word-limit maxlength="30"
                         min-length="10"></el-input>
           </el-form-item>
           <el-form-item label="其他">
               <el-input type="textarea" v-model="daily.other"></el-input>
           </el-form-item>
           <el-form-item label="提交日报">
               <el-button type="primary" @click="submitDaily">立即提交</el-button>
           </el-form-item>
       </el-form>
   </div>
</template>

<script>
    export default {
        name: "write",
        data: function () {
            return {
                daily: {
                    names: '',
                    classes: 'WUIF1907-2',
                    motto: '',
                    content: '',
                    finish: '',
                    problem: '',
                    feeling: '',
                    suggests: '',
                    other: ''
                }
            }
        },
        methods: {
            submitDaily() {
                //缺少姓名
                this.daily.names = JSON.parse(localStorage.getItem('user')).username;
                // window.console.log(this.daily);
                fetch('http://www.daily-end.com/index/index/index', {

                    //post发数据必须写body
                    body: JSON.stringify(this.daily),
                    method: "POST",
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(res=>res.json()).then(data=>{
                    if(data.code==200){
                        this.$message.success(data.msg);
                        // this.$refs.form.resetFields();
                    }
                    else{
                        this.$message.error(data.msg);
                    }
                })



            }
        }
    }
</script>

<style scoped>

</style>