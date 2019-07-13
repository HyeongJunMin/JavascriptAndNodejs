function returnSearch(){
	var str = document.getElementById("inputText").value;
	var findStr = document.getElementById("findStr").value;
	document.getElementById("txtResult").value = str.search(findStr);
}

function returnTest(){
	var str = "penpineappleapplepen";
	var inputStr = document.getElementById("findStr2").value;
	var contain = str.test(inputStr);
	document.getElementById("txtResult2").value = contain;
}