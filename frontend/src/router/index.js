import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/ProductList.vue'
import Edit from '../views/EditProduct.vue'
import Create from '../views/AddProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
