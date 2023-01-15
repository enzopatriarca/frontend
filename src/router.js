import {createRouter,  createWebHistory   } from 'vue-router'

import HomeView from '@/views/HomeView.vue';
import ProfileView from '@/views/ProfileView';
import PagenotFound from '@/views/PagenotFound';
// import ContatoView from '@/views/ContatoView';
// import ProdutoDescricao from '@/views/ProdutoDescricao';
// import CarrinhoView from '@/views/CarrinhoView';
// import LoginView from '@/views/LoginView';
const history = createWebHistory ();

const router = createRouter({
    history,
    base: process.env.BASE_URL,
    routes:[{
            path: '/:since?',
            name: 'HomeView',
            component: HomeView
        },{
            path: '/Profile/:username',
            name:'ProfileView',
            component: ProfileView
            // component: ProdutoView
        },
        {
            path: '/:pathMatch(.*)*',
            name:'not-found',
            component: PagenotFound
            // component: ProdutoView
        },  
    ]
});



export default router;