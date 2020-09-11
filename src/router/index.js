import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
        title: '首页',
        keepAlive: true
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import('../views/Category/Category.vue'),
      meta: {
        title: '分类',
        keepAlive: true
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart/Cart.vue'),
      meta: {
        title: '购物车',
        keepAlive: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile/Profile.vue'),
      meta: {
        title: '个人中心',
        keepAlive: true
      }
    },
    {
      path: '/goods_list',
      name: 'GoodsList',
      component: () => import('../views/Goods_List/GoodsList.vue'),
      meta: {
        title: '商品列表',
      }
    },
    {
      path: '/goods_detail',
      name: 'GoodsDetail',
      component: () => import('../views/GoodsDetail/GoodsDetail'),
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '*',
      component: () => import('../views/NotFound'),
      meta: {
        title: '404'
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
