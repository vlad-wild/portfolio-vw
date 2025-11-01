import { createRouter, createWebHistory } from "vue-router";

import Home from "@pages/Home.vue";
import Links from "@pages/Links.vue";
import Portfolio from "@pages/Portfolio.vue";

const routes = [
    { path: "/", component: Home },
    //   { path: '/about', component: AboutView },
    { path: "/links", component: Links },
    { path: "/portfolio", component: Portfolio },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
