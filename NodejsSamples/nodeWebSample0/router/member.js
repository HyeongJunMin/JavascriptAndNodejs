var oracledb = require("oracledb");
var express = require("express");

var app = express.Router();

var bodyParser = require("body-parser");

// session
var session = require('express-session');

var util = require("../util.js");
var oracle = require("../oracle.js");

app.use(bodyParser.urlencoded({extended:true}));

// session
app.use(session({
                    secret:'keyboard cat',  // 암호화
                    resave:false,
                    saveUninitialized:true   
}));

app.get('/', function (req, resp) {
   console.log("/ 접속 성공");
    
   resp.render('index.html');
});

app.get('/login', function (req, resp) {
    console.log("/login 접속 성공");

    resp.render('login.html');
});

app.get('/regi', function (req, resp) {
    console.log("/regi 접속 성공");

    resp.render('regi.html');
});

app.get('/idcheck', function (req, resp) {
    console.log("/idcheck 접속 성공");

    var id = req.query.id;  // get 방식
//    var id = req.body.id;   // post 방식
    console.log("id:" + id);

    var dbconn = util.getConn();
    dbconn.execute("select count(*) from member where id='" + id + "'", function (err, result) {
        if(err) console.log('에러발생');

        console.log('결과:' + result.rows);
        if(result.rows == 0){
            resp.send( { result:'OK' } );        
        }else{
            resp.send( { result:'NO' } );            
        }
    });
});



module.exports = app;
