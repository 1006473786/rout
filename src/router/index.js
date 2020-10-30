import HelloWorld from '../components/HelloWorld.vue';
import Card from '../components/Card.vue';
import Detials from '../components/Detials.vue';
import List from '../components/List.vue';
import My from '../components/My.vue';
import Login from '../components/Login.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// const ilike = require('../components/HelloWorld.vue');
// const about = require('../components/About.vue');
// const detial = require('../components/Detial.vue');
// const list = require('../components/List.vue');
// const ilike = require('../components/Ilike.vue');

const Router = new VueRouter({
    routes: [
        {
            path: "/vuex",
            component: () => import("../components/Vuex1.vue") // 函数返回的就是懒加载
        },
        {
            path: '/',
            redirect: 'HelloWorld',
            meta: {
                needLogin: true
                // keepAlive: true,
            }
        },
        {
            name: 'HelloWorld',
            path: '/HelloWorld',
            component: HelloWorld,
            meta: {
                needLogin: true
                // keepAlive: true,
            },
            children: [
            {
                path: "/button",
                component: () => import("../view/button")
            }
            ]
        },
        {
            path: "/table",
            component: () => import("../view/table")
        },
        {
            name: "Card",
            path: "/Card",
            component: Card,
            meta: {
                needLogin: true
                // keepAlive: false,
            }
        },
        {
            name: 'Detials',
            path: '/Detials',
            component: Detials,
            meta: {
                needLogin: true
                // keepAlive: false,
            }
        },
        {
            name: 'List',
            path: '/List',
            component: List,
            meta: {
                // keepAlive: true
                needLogin: true
            }
        },
        {
            name: 'My',
            path: '/My',
            component: My,
            meta: { needLogin: true }
        },
        {
            name: 'Login',
            path: '/Login',
            component: Login
        },
        {
            path: '*',
            redirect: '/HelloWorld',
            meta: {
                needLogin: true,
                keepAlive: false
            }
        }
    ]
});
Router.beforeEach((to, from, next) => {
    if (to.meta.needLogin) {
        // var cookei = document.cookie
        var token1 = sessionStorage.getItem("token");
        if (token1) {
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        }
    } else {
        next();
    }
});
export default Router;
