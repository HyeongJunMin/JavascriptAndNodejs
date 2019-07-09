function f1onclick() {
  alert('hi onclick');
}

function f2onchanged(){
  var txt = document.getElementById('txt1').value;
  document.getElementById('txt1').value = txt + 1;
}

function f3onkeydown() {
  var txt = document.getElementsByName('txtD')[0].value;
  var btn = document.createElement("BUTTON");   // Create a <button> element
  btn.innerHTML = txt;                   // Insert text
  document.body.appendChild(btn);               // Append <button> to <body>
}
function f3onkeydown(a) {
  var txt = document.getElementsByName('txtD')[0].value;
  var btn = document.createElement("BUTTON");   // Create a <button> element
  btn.innerHTML = a;                   // Insert text
  document.body.appendChild(btn);               // Append <button> to <body>
}

var myTimer = 'ssss';
var timerOn = false;
function f4mousetime(){
  alert('시작');
  timerOn = true;
  myTimer = setTimeout(function() {
    alert('완료');
    timerOn = false;
  }, 1500);
//  clearTimeout(myTimer);
}
function f4mousetime2(){
    if( timerOn ){
      alert('중단!');
      clearInterval(myTimer);
    }
}
