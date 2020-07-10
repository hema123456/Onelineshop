import axios from 'axios'

let host = 'http://www.flexrope.cn:8000'
// let host = 'http://127.0.0.1:8000'

//  获取商品类别信息
export const queryGoods = params => { return axios.get(`${host}/api/goods/`, { params: params }) }
export const queryCategorys = params => { return axios.get(`${host}/api/categorys/`, { params: params }) }
