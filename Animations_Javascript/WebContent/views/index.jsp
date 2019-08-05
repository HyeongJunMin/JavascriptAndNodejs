<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<jsp:include page="./templates/header.jsp"></jsp:include>
<script type="text/javascript" src="../static/js/teammatching.js"></script>
</head>
<body>
<div id="mainContent" style="margin:auto; padding:100px;" align="center">
<div id="content1">
	<h3 style="padding-bottom: 15px;">랜덤 팀원 정하기!</h3>
	<p>
		<label for="spinner">리더 :</label>
		<input id="spinner" name="leaderSize" size="1">명
		<input id="btnConfirm" type="button" value="확인">
	</p>
</div>
<div id="content2">

</div>
<div>
<input id="btnReset" type="button" value="초기화" onclick="location.href='./index.jsp'">
<input id="btnSendData" type="button" value="확인">
</div>

<div id="subfunctions" style="display:none;">
<p>
  <button id="disable">Toggle disable/enable</button>
  <button id="destroy">Toggle widget</button>
</p>
 
<p>
  <button id="getvalue">Get value</button>
  <button id="setvalue">Set value to 5</button>
</p>
</div>
</div>


</body>
</html>