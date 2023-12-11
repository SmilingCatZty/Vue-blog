import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/article/ArticleList.vue'),
    children: []
  },
  {
    path: '/article/:year',
    name: 'article-year',
    component: () => import('@/views/article/components/ArticleForYear.vue'),
    children: []
  },
  {
    path: '/article/:year/:month',
    name: 'article-month',
    component: () => import('@/views/article/components/ArticleForMonth.vue')
  },
  {
    path: '/article-detail/:blog_id',
    name: 'article-detail',
    component: () => import('@/views/article/ArticleDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
