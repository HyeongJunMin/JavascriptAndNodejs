//proxy 설정
//react app에서 127.0.0.1/api/* 로 요청을 보내면?
// -> 프록시가 동작해서 127.0.0.1:3001로 요청을 보냄
//npm install http-proxy-middleware --save
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://localhost:2000/'
        })
    );
};