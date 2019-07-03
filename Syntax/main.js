var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request,response){
    var url = request.url;
    console.log(url);
    if(url == '/'){
      url = '/index.html';
    }
    if(url == '/favicon.ico'){
      return response.writeHead(404);
    }
    console.log(__dirname + url);
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
    //response.end('minhj : ' + url);
    //reponse.end() 괄호 안에 있는 값에 따라 사용자에게 전송하는 데이터가 바뀐다
    //아파치는 못하고 Nodejs는 할 수 있는 것
    return;
});

app.listen(3000);
