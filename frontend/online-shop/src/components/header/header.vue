<template>
<div class="header">
  <div class="container clearf">
    <div class= 'col-4'>
      <div class="avatar">
        <a href="#" title="flexrope">
          <img src="/static/image/logo.png" alt="flexrope">
        </a>
      </div>
    </div>

    <div class= 'col-8'>
      <div class="nav">
        <ul class ='menu'>
          <li v-for="item in nav_items" :key="item.id" class ='nav-item'>
            <a :href='item.link' :class='item.class'>{{ item.content }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

</template>

<script type ="text/ecmascript-6">
export default {
  data: function () {
    return {
      nav_items: [
        {
          id: 1,
          class: 'nav-item',
          title: 'home',
          link: '/home',
          content: 'home'},
        {
          id: 2,
          class: 'nav-item',
          title: 'shop',
          link: '/shop',
          content: 'shop'},
        {
          id: 3,
          class: 'nav-item',
          title: 'about us',
          link: '/about',
          content: 'about us'},
        {
          id: 4,
          class: 'nav-item',
          title: 'contact',
          link: '/contact',
          content: 'contact'},
        {
          id: 5,
          class: 'icon-phone',
          title: 'phone',
          link: '/contact',
          content: ''},
        {
          id: 6,
          class: 'icon-envelop',
          title: 'mail',
          link: '/contact',
          content: ''},
        {
          id: 7,
          class: 'icon-social_wechat',
          title: 'wechat',
          link: '/contact',
          content: ''},
        {
          id: 8,
          class: 'icon-cart cart-button',
          title: 'cart',
          link: '#',
          content: ''}
      ]
    }
  }
}
</script>

<style lang = "stylus" rel = "stylesheet/stylus">
.header
  position: fixed
  top:0
  left:0
  right:0
  z-index: 100
  background-color:white
  .container
    line-height: 145px
    .avatar
      padding: 10px 0px 10px 0px
      img
        position: relative
        margin: auto
    .nav
      .menu
        text-align: right
        li
          line-height: 18px
          display: inline-block
          position: relative
          padding: 10px 8px 10px 8px
          a
            text-transform: uppercase
            color: #555555
            position:relative
            letter-spacing: 1px
            padding-bottom: 8px
            &:hover
              color: #84b2d2
            &.nav-item::after
              position: absolute
              top: 100%
              left: 0
              width: 100%
              height: 4px
              background-color: #84b2d2
              content: ''
              opacity: 0
              transform: translateY(10px)
            &.nav-item:hover::after
              opacity: 1
              transform: translateY(0px)
              transition: opacity 0.3s, transform 0.3s
</style>
