var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var title = queryData.id;

  //url 분석(parse) 내용 출력
  //console.log(url.parse(_url, true));

  //url 분석 내용 중 경로이름(pathname)만 출력
  var pathname = url.parse(_url, true).pathname;
  console.log('Current path name : '+pathname);

  if(pathname === '/'){
    if( queryData.id === undefined){
      title = 'Welcome';
      var description = 'Hello, Node.js';
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){

        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
        <li><a href="/?id=HTMLBody">HTMLBody</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);//요청한 파일을 잘 찾아서 잘 보냈다
        response.end(template);
      });
    }else{
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
        <li><a href="/?id=HTMLBody">HTMLBody</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);//요청한 파일을 잘 찾아서 잘 보냈다
        response.end(template);
      });
    }
  }else{
    response.writeHead(200);//요청한 파일이 없다
    response.end('404 Not Found!');
  }



});
app.listen(3000);
