<template>
    <div id="mains">
        <el-container>
            <el-aside width="200px">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>学生管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">
                                <router-link to="/mains/add">添加学生</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link to="/mains/query">查看学生</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>教师管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">添加教师</el-menu-item>
                            <el-menu-item index="2-2">查看教师</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>日报管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">填写日报</el-menu-item>
                            <el-menu-item index="3-2">查看日报</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>日报可视化</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">选项1</el-menu-item>
                            <el-menu-item index="4-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <!--            <slot></slot>-->
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                             @select="handleSelect">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项1</el-menu-item>
                                <el-menu-item index="2-4-2">选项2</el-menu-item>
                                <el-menu-item index="2-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="3" disabled>消息中心</el-menu-item>
                        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>

                    </el-menu>
                    <div class="line"></div>
                </el-header>
                <!--logo-->
                <img src="" alt="">
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>

            </el-container>
        </el-container>
        <!--        <div style="clear:both"></div>-->
    </div>
</template>

<script>
    export default {
        name: "mains",
        data() {
            return {
              user:null
            };
        },
        methods: {
            getuser(){
                this.user=JSON.parse(localStorage.getItem('user'));
            }
        },
        beforeMount() {
            this.getuser();
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    #mains {
        width: 100%;
        height: 100%;
    }
</style>
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
        /*height: 320px;*/
        min-height:500px;
    }

    .el-aside, .el-menu-vertical-demo {
        text-align: center;

    }

    .el-menu-vertical-demo {
        width: 100%;
        height: 100%;
    }

    /*水平导航*/
    /*.el-menu-demo {*/
    /*    position: absolute;*/
    /*    right: 0;*/
    /*    top: 0;*/

    /*    text-align: center;*/

    /*}*/

    a {
        color: #3b3b3b;
    }

    .router-link-exact-active { /*路由自带的类名*/
        color: #ff6700;
    }


    /*.el-table .warning-row {*/
    /*    background: oldlace;*/
    /*}*/

    /*.el-table .success-row {*/
    /*    background: #f0f9eb;*/
    /*}*/

</style>