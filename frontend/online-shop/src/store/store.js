import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const userInfo = {
  // ip: this.$cookieStore.getCookie('flr_ck_ip') || ''
}
const goodsList = {
  totalPrice: '',
  goods_list: []
}
const state = {
  userInfo,
  goodsList
}

export default new Vuex.Store({
  state
})



