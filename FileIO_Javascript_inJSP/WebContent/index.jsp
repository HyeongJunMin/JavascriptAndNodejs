<%@page import="java.util.ArrayList"%>
<%@page import="java.io.FileReader"%>
<%@page import="java.util.List"%>
<%@page import="java.io.BufferedReader"%>
<%@page import="java.io.File"%>
<%@page import="jspFileIO.*"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>File IO in JSP</title>
<script type="text/javascript" src="./resource/js/index.js"></script>
</head>
<body>
<%
	FileIO_JSP fileController = new FileIO_JSP();
	String yourStr = "sdfsdf";
	//fileController.getLog("로그다로그");
%>
<h1>FileIO</h1><hr>
<h3>Read File</h3>
<input type="button" value="chkConnection" onclick="chkLink()">
<%-- <input type="button" value="addString" onclick="addString(<%=fileController.fileRead()%>)"> --%>
<input type="button" value="addString" onclick="addString('<%= fileController.fileRead()%>')">
<div id="divRead">
	<p id="contentRead"></p>
</div>
<br>
<input id="inputLog" type="text" placeholder="input text">
<input type="button" value="saveLog" onclick="<%%>">
</body>
</html>