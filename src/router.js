import { createRouter, createWebHistory} from 'vue-router'

import FormPage from './views/FormPage.vue';
import MainPage from './views/MainPage.vue';

const routes = [
    {path: '/', name: 'main', component: MainPage},
    {path: '/form', name: 'form', component: FormPage},
    
];

const router = createRouter ({
    history: createWebHistory(),
    routes
});

export default router;