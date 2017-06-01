import Vue from 'vue'
import VueRouter from 'vue-router'
import Left from '../pages/Home/left.vue'
import Login from '../pages/login/login.vue'
import Register from '../pages/Register/index.vue'
import conten1 from '../components/contentone.vue'
import conten2 from '../components/contentone1.vue'
import Home from '../components/Home.vue'
Vue.use(VueRouter);
const routes = [
    { path: '/Login', component: Login },
    {
        path: '/Home', component: Home,
        children: [
            {
                path: '/Home/conten1', component: conten1
            },
            {
                path: '/Home/conten2', component: conten2
            }
        ]
    },
    { path: '/Register', component: Register },
    { path: '/conten1', component: conten1 }
]

var router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.fullPath == '/') {
        next({
            path: '/Login'
        })
    }
    else {
        next();
    }
})

export default router