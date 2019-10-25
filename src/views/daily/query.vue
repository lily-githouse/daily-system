<template>
    <div>
        <el-table
                :data="dailyArr"
                style="width: 100%">
            <el-table-column
                    prop="motto"
                    label="座右铭"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="content"
                    label="工作内容"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="finish"
                    label="完成情况" width="180">
            </el-table-column>
            <el-table-column
                    prop="problem"
                    label="遇到问题" width="180">
            </el-table-column>
            <el-table-column
                    prop="feeling"
                    label="心得体会" width="180">
            </el-table-column>
            <el-table-column
                    prop="suggests"
                    label="建议" width="180">
            </el-table-column>
            <el-table-column
                    prop="other"
                    label="其他" width="180">
            </el-table-column>
            <el-table-column
                    prop="ctime"
                    label="创建时间" width="180">
            </el-table-column>
        </el-table>
        <!--                <el-pagination-->
        <!--                        layout="prev, pager, next,jumper" :total="total"  :page-size="3" @changepage="changePage"-->
        <!--                >-->

        <!--                </el-pagination>-->
        <my-page :total="total" :page-size="size" @changepage="changePage"></my-page>
    </div>
</template>

<script>
    import {SUCCESS, FAIL} from "../../config/base";
    import MyPage from "../../components/my-page";

    export default {
        components: {MyPage},
        name: "query",
        data: function () {
            return {
                //要看日报
                dailyArr: [],
                user: null,
                total: 0,
                size: 3
            }
        },
        methods: {
            //让父组件获取这一页的数据
            changePage(i) {
                //显示当前页的数据
                this.getDaily(i);
            },
            //获取当前学生的日报
            getDaily(n) {
                let user = this.user.username;
                fetch("http://www.daily-end.com/index/index/query?names=" + user + '&' + 'page=' + n + '&' + 'size=' + this.size)
                    .then(res => res.json()).then(data => {
                    if (data.code == SUCCESS) {
                        this.dailyArr = data.data;
                        this.total = data.count;
                    } else if (data.code == FAIL) {
                        window.console.log(data);
                    }
                })
            },
            //从本地拿回用户
            getUser() {
                this.user = JSON.parse(localStorage.user);
            }
        },
        beforeMount() {
            this.getUser();
            this.getDaily(1);

        }
    }
</script>

<style scoped>

</style>