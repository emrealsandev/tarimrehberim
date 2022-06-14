import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ProductPurchase from '../views/ProductPurchase.vue'
import BlogView from '../views/BlogView.vue'
import AuthLayout from '../components/AuthLayout.vue'
import AdminLayout from '../components/AdminLayout.vue'
import Login from '../views/Admin/Login.vue'
import Dashboard from '../views/Admin/Dashboard.vue'
import store from '../store';
import Plants from '../views/Admin/Plants.vue'
import CreatePlant from '../views/Admin/CreatePlant.vue'
import CreateProduct from '../views/Admin/CreateProduct.vue'
import CreateBlog from '../views/Admin/CreateBlog.vue'
import Products from '../views/Admin/Products.vue'
import Blogs from '../views/Admin/Blogs.vue'




const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/productview',
    name: 'ProductView',
    component: ProductView
  },
  {
    path: '/product/purchase/:id',
    name: 'ProductPurchase',
    component: ProductPurchase
  },
  {
    path: '/blogview',
    name: 'BlogView',
    component: BlogView
  },
  {
    path: '/auth',
    redirect : '/login',
    name : 'Auth',
    meta : {isGuest : true},
    component : AuthLayout,
    children : [
      {
        path: '/login',
        name : "Login",
        component : Login,
       }
    ]
  },
  {
    path : '/admin',
    redirect : '/dashboard',
    component : AdminLayout,
    meta : {requiresAuth : true},
    children : [
      {path : '/plants' , name: 'Plants' , component : Plants},
      {path : '/plants/create' , name: 'CreatePlant' , component : CreatePlant},
      {path : '/dashboard' , name: 'Dashboard' , component : Dashboard},
      {path : '/product/create' , name: 'CreateProduct' , component : CreateProduct},
      {path : '/products' , name: 'Products' , component : Products},
      {path : '/blogs' , name: 'Blogs' , component : Blogs},
      {path : '/blogs/create' , name: 'CreateBlog' , component : CreateBlog},
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  console.log(to, to.meta, to.meta.requiresAuth, store.state.user.token);
  if (to.meta.requiresAuth) {
    if (!store.state.user.token) {
      next({name : 'Login'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
