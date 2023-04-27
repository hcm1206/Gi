// index.js

const express = require('express')	// 모듈 추출
const app = express()			// 서버 생성
const port = 5000			// 서버주소(port) 지정

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})