<template>
<div class='main-page'>
  <div class= 'slider'>
    <ul>
      <li><a>
       <img src='https://sc01.alicdn.com/kf/H97b9a984168f4794a71e05dc80a3ce18Q.jpg'>
      </a></li>
    </ul>
  </div>
  <div class= 'advantage' style= 'padding-top:20px;'>
  <img src = '/static/image/advantage.png'>
  </div>
  <div class='container clearf'>
    <h2 class="title">Our Bestsellers</h2>
      <div v-for='item in hot_sellers' :key='item.id' class='col-3 product'>
        <div class = 'product_item'>
          <div class = 'icon left_top'>
             <button class='icon-heart'></button>
          </div>
          <div class= 'product_image'>
            <a :title='item.name'>
            <img :src= 'item.pic_url'>
            </a>
          </div>
          <div class= 'product_info'>
            <div class= 'product_name'><a :title='item.name'>{{ item.name }}</a></div>
            <div class= 'product_price'>
              <span class ='price b'>{{ item.min_unit_price }} - {{ item.max_unit_price }} &dollar;</span>
              &nbsp;&frasl;&nbsp;
              <span class ='unit'>{{ item.unit }}</span>
            </div>
            <div class= 'product_moq'>
              <span class = 'moq b' >{{ item.min_order }}</span>
              &nbsp;&frasl;&nbsp;
              <span class = 'unit b'>{{ item.unit }}</span>
              <span class = 'description'>(Min. Order)</span>&nbsp;
              <span class = 'icon right_bottom'> <button class='icon-plus'></button></span>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>

</template>

<script type ="text/ecmascript-6">
import {queryGoods} from '@/api/api'

export default {
  data () {
    return {
      hot_sellers: []
    }
  },
  created () {
    this.getGoods()
  },
  methods: {
    getGoods () {
      queryGoods({
        is_hot: true
      })
        .then((response) => {
          console.log(response.data)
          this.hot_sellers = response.data.results
        }).catch(function (error) {
          console.log(error)
        })
    }
  }
}

</script>

<style lang = "stylus" rel = "stylesheet/stylus">

</style>
