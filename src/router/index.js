import { createRouter, createWebHistory } from "vue-router";
import Banner from "../components/Banner"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const routes = [
    { path: '/', component: Banner },
    { path: '/projects', component: Projects },
    { path: '/skills', component: Skills },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router