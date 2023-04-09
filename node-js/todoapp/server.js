const express = require('express'); //라이브러리 요청
const app = express(); //라이브러리로 새 객체

app.listen(8090, function(){ //서버 포트 번호, 띄우고 실행할 코드
    console.log('listening on 8090')

});

/*
누가 /pet으로 방문하면 pet관련 안내문 띄워주기
app.get('/pet', function(요청, 응답){
    응답.send("반갑습니다"); 
})
*/

app.get('/pet', function(요청, 응답){
    응답.send("펫 용품에 대해"); 
});