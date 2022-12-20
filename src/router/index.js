import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Category from '../views/Category/Category.vue'
import CategoryDetails from '../views/Category/CategoryDetails.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import Product from '../views/Product/Product.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import ProductDetails from '../views/Product/ProductDetails.vue'
import ShowWishlist from '../views/Product/ShowWishlist.vue'
import Card from "../views/Card.vue"
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'AdminCategory',
    component: Category
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/category/show/:id',
    name: 'CategoryDetails',
    component: CategoryDetails
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin/product/new',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/product/show/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/wishlist',
    name: 'ShowWishlist',
    component: ShowWishlist
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
