<template>
<div class = 'main-page'>
  <div class = 'container clearf'>
    <h1 class = 'title'>contact us</h1>
    <p class = 'text'>if you have any questions or suggestions , You can reach us through the message board below .</p>
    <div class= 'mail_sender'>
      <div class= 'col-4'>
        <label>Name<span class='red'>*</span></label>
        <input class='user_name' type = 'text' placeholder='  your name' required= 'required'>
      </div>
      <div class= 'col-8'>
        <label>Email<span class='red'>*</span></label>
        <input class='user_email' type = 'text' placeholder=' your name'>
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


</style>
