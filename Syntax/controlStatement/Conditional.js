//flow control statement == 제어문입니다.
console.log('a');
console.log('b');
console.log('제어문 시작!');

if( true ) {
  console.log('c1');
}else{
  console.log('c2');
}

var args = process.argv;
console.log(args[3]);

console.log('이제 조건문 ㄱㄱ');
if( args[2] === '1' ){
  console.log('1이구나');
}else {
  console.log('1아니구나');
}
