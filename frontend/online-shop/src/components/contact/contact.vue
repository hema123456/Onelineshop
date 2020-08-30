<template>
<div class = 'main-page'>
  <div class = 'container clearf'>
    <h1 class = 'title'>contact us</h1>
    <p class = 'text'>if you have any questions or suggestions , You can contact us through phone,mail,wechat or the message board below.</p>
    <div class='container contact_borad'>
        <div class='icon icon-envelop'></div>
        <div>felix felix.liu@flexrope.cn<br>aaron aaron.zhou@flexrope.cn</div>
        <div class='icon icon-phone'></div>
        <div>felix +8613265740369 <br>aaron +8615674867519 </div>
        <div class='icon icon-social_wechat'></div>
        <div>felix 13265740369<br>aaron 15674867519</div>
    </div>
    <br>
    <div class= 'mail_sender'>
      <h2 class= 'title'>Message board</h2>
      <div class= 'col-4'>
        <label>Name<span class='red'>*</span></label>
        <input class='user_name' type = 'text' placeholder='  your name' required= 'required'>
      </div>
      <div class= 'col-8'>
        <label>Email<span class='red'>*</span></label>
        <input class='user_email' type = 'text' placeholder=' your email'>
      </div>
      <div class= 'col-12'>
          <label>Content<span class='red'>*</span></label>
          <textarea class = 'user_message' placeholder=' say something...'></textarea><br>
          <input class= 'email_sender_button' type = 'submit' value = 'SEND'>
      </div>
    </div>
  </div>
</div>

</template>

<script type ="text/ecmascript-6">

export default {}
</script>

<style lang = "stylus" rel = "stylesheet/stylus">
.mail_sender
  .user_message
    height: 280px
    width: 640px
  .user_name,.user_email
    width: 275px
    height: 40px
  .email_sender_button
    width: 300px
    height: 40px
    background: #84b2d2

.contact_borad
  padding-left: 15px

</style>
