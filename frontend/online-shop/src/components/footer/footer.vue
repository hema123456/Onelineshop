<template>
<div class='footer'>
<div class='container clearf'>
<div class= 'col-4'>
<div class = 'footer-menu'>
    <h6>footer menu</h6>
    <ul class ='menu'>
      <li class = 'link-item' v-for="item in foot_items" :key="item.id">
        <a :href='item.link'>{{ item.content }}</a>
      </li>
    </ul>
</div>
</div>
<div class= 'col-4'>
<div class = 'main-menu'>
    <h6>main menu</h6>
    <ul class ='menu'>
      <li class = 'link-item' v-for="item in main_items" :key="item.id">
        <a :href='item.link' :class='item.class'>{{ item.content }}</a>
      </li>
    </ul>
</div>
</div>
<div class= 'col-4'>
    <div class='footer-borad'>
        <div class='icon icon-envelop'></div>
        <div>felix felix.liu@flexrope.cn<br>aaron aaron.zhou@flexrope.cn</div>
        <div class='icon icon-phone'></div>
        <div>felix +8613265740369 <br>aaron +8615674867519 </div>
        <div class='icon icon-social_wechat'></div>
        <div>felix 13265740369<br>aaron 15674867519</div>
    </div>
</div>

</div>

<div class = 'container' style='padding-bottom:20px;'>
  <div class='credits'>
      <p>© 2020 flexrope.Powered by Hippo
      <br>
      All rights reserved. flexrope is a registered trademark of FlexRope Industry And Trade Co.,Ltd.
      </p>
  </div>
</div>
</div>
</template>

<script type ="text/ecmascript-6">
export default {
  data: function () {
    return {
      foot_items: [
        {
          id: 1,
          link: '#',
          content: 'FAQ'},
        {
          id: 2,
          link: '#',
          content: 'Privacy Policy'},
        {
          id: 3,
          link: '#',
          content: 'Terms & Conditions'}
      ],
      main_items: [
        {
          id: 1,
          class: 'nav_item',
          link: '/home',
          content: 'Home'},
        {
          id: 2,
          class: 'nav_item',
          link: '/shop',
          content: 'Shop'},
        {
          id: 3,
          class: 'nav_item',
          link: '/about',
          content: 'About us'},
        {
          id: 4,
          class: 'nav_item',
          link: '/contact',
          content: 'Contact'}
      ]
    }
  }
}
</script>

<style lang = "stylus" rel = "stylesheet/stylus">
.footer
  background-color:#222
  color: #b1aca1
  margin-top: 20px
  margin-bottom: 0px
  li
    padding: 5px 0
  a
    color: inherit
    &:hover
      color: white

p,h6
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px

.footer-menu,.main-menu,.footer-borad
  padding: 10px 20px 10px 0px
  h6
    text-transform: uppercase;
    display: block;
    letter-spacing: 1px;
    border-bottom: 1px solid #b1aca1

.footer-borad
  margin-top: 25px

</style>
