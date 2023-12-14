const express = require('express')  // node_modules 안에 들어있다.
const app = express()               // 처음에 npm install express를 했을 때 설치 된거 ㅇㅋ?

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/greet', function (req, res) {
    res.send('Good Morning')
  })

app.listen(3000,()=>{
    console.log("server start!")
})
