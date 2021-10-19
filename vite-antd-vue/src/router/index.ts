import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path:'/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../components/HelloWorld.vue')
    }
  ],
})
export default router