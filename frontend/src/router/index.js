import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/Products.vue'
import Category from "../views/Category.vue"
import Search from "../views/Search.vue"
import Cart from "../views/Cart.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/:category_slug/:product_slug",
    name: "Products",
    component: Products
  },
  {
    path: "/:category_slug",
    name: "Category",
    component: Category
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
