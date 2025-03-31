import { createRouter, createWebHistory } from "vue-router";
import AvailableInitiatives from "../views/AvailableInitiatives.vue";
import MyInitiatives from "../views/MyInitiatives.vue";
import AboutUs from "../views/AboutUs.vue";

const routes = [
    { path: "/available-initiatives", name: "home", component: AvailableInitiatives },
    { path: "/my-initiatives", name: "myInitiatives", component: MyInitiatives },
    { path: "/about-us", name: "aboutUs", component: AboutUs },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;