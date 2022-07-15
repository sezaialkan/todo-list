import { createRouter, createWebHistory } from 'vue-router'
import CreateView from '../views/CreateView.vue'
import HomeView from '../views/HomeView.vue'
import UpdateView from '../views/UpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path : '/create',
      name : 'create',
      component : CreateView
    },{
      path : '/update/:id',
      name : 'update',
      component : UpdateView,
      props : true
    }
  ]
})

export default router
