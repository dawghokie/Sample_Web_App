import { createRouter, createWebHistory } from 'vue-router'
import TableComponent from '@/components/TableComponent.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TableComponent,
    }
  ]
})