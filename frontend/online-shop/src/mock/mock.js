const Mock = require('mockjs')
const Random = Mock.Random
//  使用mockjs模拟数据
Mock.mock('http://localhost:8080/mock/data', (req, res) => { //  当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  let list = []
  for (let i = 0; i < 30; i++) {
    let listObject = {
      id: i + 1,
      title: Random.csentence(5, 10), // 随机生成一段中文文本。
      company: Random.csentence(5, 10),
      attention_degree: Random.integer(100, 9999), //  返回一个随机的整数。
      photo: Random.image('114x83', '#00405d', '#FFF', 'Mock.js')
    }
    list.push(listObject)
  }
  return {
    data: list
  }
})



