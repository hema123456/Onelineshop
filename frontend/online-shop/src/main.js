// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import axios from 'axios'
import store from '@/store/store'
import '@/common/stylus/index.styl'
import '@/axios'
import '@/api'
// import '@/mock/mock'
import {setCookie, getCookie, delCookie} from '@/assets/js/cookie'

Vue.prototype.$cookieStore = {setCookie, getCookie, delCookie}
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
