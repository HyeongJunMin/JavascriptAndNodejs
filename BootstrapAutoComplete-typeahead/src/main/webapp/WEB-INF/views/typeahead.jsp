<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>

<script type="text/javascript" src="/js/bootstrap/bootstrap-3-typeahead.js"></script>
<script type="text/javascript" src="/js/typeahead-init.js"></script>
</head>
<body>
Bootstrap Typeahead

<div class="card main-wrap" style="width: 500px; margin:100px;">	
	<div class="card-body">
		<div class="card-title">
			<h4>1차 시도</h4>
		</div>

		<div class="form-grouop row">
			<label for="inputTxt" class="col-sm-2 col-form-label">검색</label>
			<div class="col-sm-8">
		   		<input type="text" id="inputTxt" placeholder="검색어 입력" data-provide="typeahead" class="form-control">
			</div>
			<div class="col-sm-2">
		   		<input type="button" id="btnOk" class="btn btn-primary" value="ok?">
			</div>			
		</div>
	</div>
</div>


</body>
</html>