export function setCookie (name, value, expire) {
  const date = new Date()
  date.setSeconds(date.getSeconds() + expire)
  document.cookie = name + '=' + escape(value) + '; expires=' + date.toGMTString()
  console.log(document.cookie)
}

export function getCookie (name) {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(name + '=')
    if (start !== -1) {
      start = start + name.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end === -1) end = document.cookie.length
      return unescape(document.cookie.substring(start, end))
    }
  }
  return ''
}

export function delCookie (name) {
  setCookie(name, '', -1)
}

// this.$cookieStore.setCookie( 'name' ,this.name, 60);//存入用户名，设置有效时间60秒
// this.$cookieStore.getCookie( 'name' );//获取
// this.$cookieStore.delCookie( 'name' );//删除
