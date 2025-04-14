import { createRouter, createWebHistory } from 'vue-router';
import InitiativeList from '../components/InitiativeList.vue';
import RegisterForm from '../components/RegisterForm.vue';

const routes = [
    { path: '/', component: InitiativeList },
    { path: '/register/:id', component: RegisterForm },
    { path: '/my', component: () => import('../components/MyInitiatives.vue') },
    { path: '/about', component: () => import('../components/About.vue') }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
