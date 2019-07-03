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

    var template = `
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
  <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
  <img src="coding.jpg" width="100%">
  </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
  </p>
</body>
</html>

    `;

    response.writeHead(200);
    //response.end(fs.readFileSync(__dirname + _url));
    //내 파일을 읽어서 보내지 않고 query로 받은 id를 보내준다!
    response.end(template);
    //response.end('minhj : ' + url);
    //reponse.end() 괄호 안에 있는 값에 따라 사용자에게 전송하는 데이터가 바뀐다
    //아파치는 못하고 Nodejs는 할 수 있는 것
    return;
});

app.listen(3000);
