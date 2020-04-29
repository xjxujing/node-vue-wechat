import Vue from "vue";
import Router from "vue-router";
import Index from "../views/Index.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "index",
            component: Index
        },
        { path: "/login", name: "login", component: () => import("../views/Login.vue") },
        { path: "/register", name: "register", component: () => import("../views/Register.vue") },
    ],
});

// 登录之前只能访问登录或者注册
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.wxToken ? true : false;
    if (to.path == "/login" || to.path == "/register") {
        next();
    } else {
        isLogin ? next() : next("/login");
    }
});

export default router;
