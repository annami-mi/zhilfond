import {createRouter, createWebHistory} from "vue-router"
import MainPage from "@/pages/MainPage";
import SinglePersonPage from "@/pages/SinglePersonPage";

const routes = [
    {path: '/', component: MainPage},
    {path: '/person/:id', component: SinglePersonPage},
]

// *** ГЛОБАЛЬНЫЕ НАСТРОЙКИ РОУТЕРА ***
export const router = createRouter({
    history: createWebHistory(),
    routes,

    // Скролл к началу страницы при переходе по приложению
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 , behavior: 'smooth'}
    },
})