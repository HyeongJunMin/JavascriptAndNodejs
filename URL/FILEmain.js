var http = require('http');
var fs = require('fs');
var url = require('url');//url모듈을 사용할것이다!

//내 HTTP들이 모든 요청에 대해 Hello World라고 응답하도록 설정
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    //query의 id값을 받아옴.
    console.log(queryData.id);
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    console.log(__dirname + url);
    var template = ``;
    //function으로 받은 description 변수를 본문으로 보냄
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err,description){

      template = `
      <!doctype html>
      <html>
      <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
      </head>
      <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
      <li><a href="/?id=html">HTML</a></li>
      <li><a href="/?id=dfdfdfdfdf">CSS</a></li>
      <li><a href="/?id=ht1234234234234ml">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>${description}</p>
      </body>
      </html>
      `;
      //response가 요 안에 있어야 함
      response.end(template);
    });


    //response.writeHead(200);
    //response.end(fs.readFileSync(__dirname + _url));
    //내 파일을 읽어서 보내지 않고 query로 받은 id를 보내준다!

    //response.end('minhj : ' + url);
    //reponse.end() 괄호 안에 있는 값에 따라 사용자에게 전송하는 데이터가 바뀐다
    //아파치는 못하고 Nodejs는 할 수 있는 것
    return;
});

app.listen(3000);
