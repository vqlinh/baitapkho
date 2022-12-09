import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
import VueRouter from 'vue-router';
const routes = [
    { path: '/', component: Home },
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;