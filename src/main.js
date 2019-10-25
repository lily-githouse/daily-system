import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);

//1.引入组件
import index from "./views/index";
import login from "./views/login";
import mains from "./views/mains";
import query from "./views/students/query";    //查看学生
import add from "./views/students/add";
import edit from "./views/students/edit";
import student from "./views/student";
import sdailywrite from "./views/daily/write";
import sdailyquery from "./views/daily/query";  //学生模块查看日报

//2.路由和组件映射
let router = new VueRouter({
    routes: [
        {path: '/', component: index,meta:{title:'学生日报管理系统'}},
        {path: '/login', component: login},
        {path: '/student', component: student,
        children:[
            {path:'sdailywrite',component:sdailywrite,name:'studentwrite',meta:{title:'学生写日报'}},
            {path:'sdailyquery',component:sdailyquery,name:'studentquery',meta:{title:'学生查日报'}}
        ]},

        {
            path: '/mains', component: mains,
            children: [
                {path: 'add', component: add,meta:{title:'添加学生'}},
                {path: 'query', component: query,meta:{title:'查看学生'}},
                {path: 'edit', component:edit,name:'studentedit',meta:{title:'编辑学生'}}
            ]
        },

    ]
});

//导航守卫
//组件切换  设置文档标题

        //监听组件切换
        //全局前置守卫
// router.beforeEach((to, from, next) => {
//     // 切换到的组件的标题是什么
//     let title=to.meta.title ||'学生日报管理系统';
//     // 设置文档标题
//     document.title=title;
//     window.console.log(from);
//     window.console.log(next);
// })


new Vue({
    render: h => h(App),
    //4.挂载路由
    router
}).$mount('#app')
