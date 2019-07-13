function idChk1(){
	alert('idChk1');
}
function idChk2(){
	alert('idChk2');
}
function idChk3(){
	alert('idChk3');
	var re = /^[a-zA-Z0-9]{4,12}$/ // 아이디와 패스워드가 적합한지 검사할 정규식
	var id = document.getElementById("txtIdChk3");
	if(!check(re,id,"아이디는 4~12자의 영문 대소문자와 숫자로만 입력")) {
		return false;
    }
}
function check(re, what, message) {
    if(re.test(what.value)) {
    	alert('ㅇㅋ통과');
        return true;
    }
    alert(message);
    what.value = "";
    what.focus();
    //return false;
}