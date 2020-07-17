<template>
<div class='main-page'>
  <div class='container clearf'>
     <div class = 'navbar'>
     </div>
     <div v-for = 'category in categories' :key='category.id' class = 'container clearf category'>
         <h2>{{ category.name }}</h2>
         <div v-for='good in goods' v-if='good.category.id === category.id' :key='good.id' class='col-3 product'>
            <div class = 'product_item'>
              <div class = 'icon left_top'>
                 <button class='icon-heart'></button>
              </div>
              <div class= 'product_image'>
                <a :href='good.ali_url' target = '_blank' :title='good.name'>
                <img :src= 'good.pic_url'>
                </a>
              </div>
              <div class= 'product_info'>
                <div class= 'product_name'><a :title='good.name'>{{ good.name }}</a></div>
                <div class= 'product_price'>
                  <span class ='price b'>{{ good.min_unit_price }} - {{ good.max_unit_price }} &dollar;</span>
                  &nbsp;&frasl;&nbsp;
                  <span class ='unit'>{{ good.unit }}</span>
                </div>
                <div class= 'product_moq'>
                  <span class = 'moq b' >{{ good.min_order }}</span>
                  &nbsp;&frasl;&nbsp;
                  <span class = 'unit b'>{{ good.unit }}</span>
                  <span class = 'description'>(Min. Order)</span>&nbsp;
                  <span class = 'icon right_bottom'> <button class='icon-plus'></button></span>
                </div>
              </div>
            </div>
         </div>
     </div>
  </div>
</div>
</template>

<script type ="text/ecmascript-6">
import {queryCategorys, queryGoods} from '@/api/api'

export default {
  data () {
    return {
      data_list: [],
      categories: [],
      goods: []
    }
  },
  created () {
    this.getCategorys()
    this.getGoods()
  },
  methods: {
    getCategorys () {
      queryCategorys()
        .then((response) => {
          console.log(response.data)
          this.categories = response.data
        }).catch(function (error) {
          console.log(error)
        })
    },
    getGoods () {
      queryGoods()
        .then((response) => {
          console.log(response.data)
          this.goods = response.data.results
        }).catch(function (error) {
          console.log(error)
        })
    },
    thumbUp () {
    },
    addToCart () {
    }
  }
}
</script>
export default{}
<style lang = "stylus" rel = "stylesheet/stylus">
.category
  h2
    color : black
    font-size: 20px
    display:block
    margin: 15px auto 15px
    padding: 0 15px 0 15px
    border-bottom: 2px solid
    &::before
      display: inline-block
      width: 5px
      height: 20px
      background-color: black
      content: ''
      position: relative
      vertical-align: -10%
      transform: translateX(-10px)
</style>
