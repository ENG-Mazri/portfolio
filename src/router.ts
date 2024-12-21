import {createRouter, createWebHistory} from 'vue-router';
import Main from './views/Main.vue';
import Resume from './views/Resume.vue';
import Works from './views/Works.vue';


const routes = [
    {
        path: "/",
        name: "home",
        component: Main,
        meta:{
            requiresAuth: false
        }
    },
    {
        path: "/works",
        name: "works",
        component: Works,
        meta:{
            requiresAuth: false
        }
    },
    {
        path: "/resume",
        name: "resume",
        component: Resume,
        meta:{
            requiresAuth: false
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;