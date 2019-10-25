<!--自定义组件，每页显示数据的条数-->
<template>
    <div>
        <ul class="pages">
            <!--当前按钮的页码与点击的页码比较，current是当前选中的-->
            <li :class="{active:current==n}" v-for="n in pageNumber" :key="n" @click="clickpage(n)">{{n}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "my-page",
        data() {
            return {
                //记录当前选的是哪一页
                current: 1
            }
        },
        props: {
            total: {required: true, type: Number},
            pageSize: {type: Number, default: 3}
        },
        computed: {
            //总共的页数
            pageNumber() {
                return Math.ceil(this.total / this.pageSize)
            }
        },
        methods: {
            clickpage(i) {
                if (this.current == i) {
                    return;
                }
                //带参数，告诉父组件是第几页(i)
                //点哪个让当前显示那个
                this.current = i;
                this.$emit('changepage', i)
            }
        }
    }
</script>

<style scoped>
    .pages {
        width: 100%;
        height: 30px;
        display: flex;
        text-align: center;
    }

    .pages li {
        margin-left: 10px;
        list-style: none;
        width: 30px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        background-color: deepskyblue;
        cursor: pointer;
    }

    /*选中当前按钮*/
    .pages > li.active {
        background-color: #ff6700;
        color: #fff;
    }
</style>