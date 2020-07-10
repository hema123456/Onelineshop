import axios from 'axios'

// let host = 'http://www.flexrope.cn'
let localHost = 'http://127.0.0.1:8888'

//  获取商品类别信息
export const queryGoods = params => { return axios.get(`${localHost}/goods/`, { params: params }) }
export const queryCategorys = params => { return axios.get(`${localHost}/categorys/`, { params: params }) }
