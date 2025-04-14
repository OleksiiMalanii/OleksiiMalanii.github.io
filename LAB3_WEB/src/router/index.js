import { createRouter, createWebHistory } from 'vue-router';
import AvailableInitiatives from '../components/AvailableInitiatives.vue';
import MyInitiatives from '../components/MyInitiatives.vue';
import About from '../components/About.vue';

const routes = [
    { path: '/', name : "Home" ,component: AvailableInitiatives },
    { path: '/my', name : "My", component: MyInitiatives },
    { path: '/about', name: "About",  component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;