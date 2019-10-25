<template>
    <div id="mains">
        <el-container>
            <el-aside width="200px">
                <el-menu
                        :router="true"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>日报管理</span>
                        </template>
                        <el-menu-item-group>
                            <!--                            不用router-link可以跳转显示对应的页面-->
                            <el-menu-item index="/student/sdailywrite">填写日报</el-menu-item>
                            <el-menu-item index="/student/sdailyquery">查看日报</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <el-menu class="el-menu-demo" mode="horizontal">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3" disabled>消息中心</el-menu-item>
                        <el-menu-item index="4" >{{users.username}}</el-menu-item>


                        <el-button>退出</el-button>
                    </el-menu>

                </el-header>
                <!--logo-->
                <img src="" alt="">
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "student",
        data(){
            return{
                users:null
            }
        },
        methods: {
            getUser() {
                this.users = JSON.parse(localStorage.getItem('user'));
            }
        },
        beforeMount() {
            this.getUser();
        }
    }
</script>

<style scoped>
    body > .el-container {
        margin-bottom: 40px;
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        height: 320px;
    }

    .el-aside, .el-menu-vertical-demo {
        text-align: center;

    }

    .el-menu-vertical-demo {
        width: 100%;
        height: 100%;
    }

    a {
        color: #fff;
    }

    .router-link-exact-active { /*路由自带的类名*/
        color: #ff6700;
    }
</style>