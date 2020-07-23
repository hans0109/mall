import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home/Home.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import('../views/Category/Category.vue'),
      meta: {
        title: '分类'
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart/Cart.vue'),
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile/Profile.vue'),
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/goods_list',
      name: 'GoodsList',
      component: () => import('../views/Goods_List/GoodsList.vue'),
      meta: {
        title: '商品列表'
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
