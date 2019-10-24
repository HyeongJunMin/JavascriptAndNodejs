/**
 * 
 */

$(function(){
	console.log('jQuery ok');
	
	//defaultSettings();
	requestController();
});

//Ajax통신을 통해 내 컨트롤러를 호출
function requestController(){
	var $input = $("#inputTxt");
	var dataArr = new Array();
	setDataArr(dataArr);
	
	$input.typeahead({
	  source: dataArr,
	  autoSelect: true
	});
	$input.change(function() {
	  var current = $input.typeahead("getActive");
	  if (current) {
	    // Some item from your model is active!
	    if (current.name == $input.val()) {
	      // This means the exact match is found. Use toLowerCase() if you want case insensitive match.
	    } else {
	      // This means it is only a partial match, you can either add a new item
	      // or take the active if you don't want new items
	    }
	  } else {
	    // Nothing is active so it is a new value (or maybe empty value)
	  }
	});
}
//데이터리스트 세팅
function setDataArr(dataArr){
	dataArr.push({id: "someId1", name: "Display name 3"});
	dataArr.push({id: "someId2", name: "Display name 4"});
	
	$.ajax({
		type : 'get',
		url : "/getmemberid",
		dataType : "json",
		data : {
			value : $("#inputTxt").val()
		},
		async: true,
		success : function(data) {
			console.log('load ok ');
			$.each(data, function(index, item) {
				dataArr.push( {id: "userid" + index , name: item } );
			});
		},
		error : function(err) {
			console.log('connect eror');
		}
	});
}

//bootstrap에서 제공하는 기본 세팅
function defaultSettings(){
	var $input = $("#inputTxt");
	$input.typeahead({
	  source: [
	    {id: "someId1", name: "Display name 1"},
	    {id: "someId2", name: "Display name 2"}
	  ],
	  autoSelect: true
	});
	$input.change(function() {
	  var current = $input.typeahead("getActive");
	  if (current) {
	    // Some item from your model is active!
	    if (current.name == $input.val()) {
	      // This means the exact match is found. Use toLowerCase() if you want case insensitive match.
	    } else {
	      // This means it is only a partial match, you can either add a new item
	      // or take the active if you don't want new items
	    }
	  } else {
	    // Nothing is active so it is a new value (or maybe empty value)
	  }
	});	
}