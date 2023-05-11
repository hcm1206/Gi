const express = require('express');
const app = express();

// 'GI' 폴더를 정적 파일 경로로 지정합니다.
app.use('/main_images', express.static(__dirname + '/main_images'));

// 라우터에 GET 요청 핸들러를 등록합니다.
app.get('/', function(req, res) {
  // main.html 파일을 렌더링합니다.
  res.sendFile(__dirname + '/main.html');
});

app.get('/main_images', function(req, res) {
  fs.readFile('./main_images/logo.png', function(err, data) {
    if (err) {
      console.log(err);
      res.status(404).end();
    } else {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.end(data);
    }
  });
});

// 서버를 5000번 포트로 엽니다.
app.listen(5000, function() {
  console.log('서버가 시작되었습니다.');
});
