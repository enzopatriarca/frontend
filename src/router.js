import {createRouter,  createWebHistory   } from 'vue-router'

import HomeView from '@/views/HomeView.vue';
import ProfileView from '@/views/ProfileView';
// import ContatoView from '@/views/ContatoView';
// import ProdutoDescricao from '@/views/ProdutoDescricao';
// import CarrinhoView from '@/views/CarrinhoView';
// import LoginView from '@/views/LoginView';
const history = createWebHistory ();

const router = createRouter({
    history,
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
    ]
});



export default router;