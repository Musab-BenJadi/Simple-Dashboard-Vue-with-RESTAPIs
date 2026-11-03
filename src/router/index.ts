import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Users from '../views/Users.vue'
import Products from '../views/Products.vue'
import Orders from '../views/Orders.vue'
import Analytics from '../views/Analytics.vue'
import Settings from '../views/Settings.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/users', component: Users },
  { path: '/products', component: Products },
  { path: '/orders', component: Orders },
  { path: '/analytics', component: Analytics },
  { path: '/settings', component: Settings },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router