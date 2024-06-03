<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원정보 확인</title>
</head>
<body>
	<%
		request.setCharacterEncoding("utf-8");
		String memberid = request.getParameter("memberid");
		String memberpw = request.getParameter("memberpw");
		String membername = request.getParameter("membername");
		String membernumber = request.getParameter("membernumber");
	
	%>
	<h3>회원가입 정보</h3>
	<hr>
	아이디 : <%= memberid %><br><br>
	비밀번호 : <%= memberpw %><br><br>
	이름 : <%= membername %><br><br>
	전화번호 : <%= membernumber %><br><br>
	
	
	
</body>
</html>