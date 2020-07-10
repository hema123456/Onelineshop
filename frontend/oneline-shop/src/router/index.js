/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import header from 'components/header/header'
import footer from 'components/footer/footer'
import home from 'components/home/home'
import shop from 'components/shop/shop'
import about from 'components/about/about'
import contact from 'components/contact/contact'
import app from 'components/app/app'
import App from '@/App'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
    path: '/',
    component: app,
    children: [
      {
        name: 'home',
        path: 'home',
        components: {
          header: header,
          content: home,
          footer: footer
        },
      },
      {
        name: 'shop',
        path: 'shop',
        components: {
          header: header,
          content: shop,
          footer: footer
        }
      },
      {
        name: 'about',
        path: 'about',
        components: {
          header: header,
          content: about,
          footer: footer
        }
      },
      {
        name: 'contact',
        path: 'contact',
        components: {
          header: header,
          content: contact,
          footer: footer
        }
      }
    ]
    },
  ]
})


router.beforeEach((to, from, next) => {
  if (to.path === '/') next({ path: '/home' })
  else next()
})


//抛出路由
export default router
