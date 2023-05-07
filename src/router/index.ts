import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/loginPost',
    name: 'loginPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPostView.vue')
  },
  {
    path: '/loginPostReal',
    name: 'loginPostReal',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPostViewReal.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "about" */ '../views/TableView.vue')
  },
  {
    path: '/tablePost',
    name: 'tablePost',
    component: () => import(/* webpackChunkName: "about" */ '../views/TablePostView.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/sentinel',
    name: 'sentinel',
    component: () => import(/* webpackChunkName: "about" */ '../views/SentinelView.vue')
  },
  {
    path: '/template',
    name: 'template',
    component: () => import(/* webpackChunkName: "about" */ '../views/TemplateView.vue')
  },
  // manage
  {
    path: '/searchLogView',
    name: 'searchLogView',
    component: () => import(/* webpackChunkName: "about" */ '../views/manage/SearchLogView.vue')
  },
  // auth
  {
    path: '/userView',
    name: 'userView',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/UserView.vue')
  },
  {
    path: '/roleView',
    name: 'roleView',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/RoleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
