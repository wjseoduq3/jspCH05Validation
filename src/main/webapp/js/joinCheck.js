/**
 * 
 */
function joinCheck() {
	
	/* var form = document.joinForm; */
	/* 아이디가 공란 입력인지 유효성 검사*/
	if (document.joinForm.memberid.value.length == 0) {
		alert("아이디는 필수 입력사항입니다. \n다시 확인해주세요.")
		document.joinForm.memberid.focus();
		return false;
	}
	/* 아이디가 4자 이상 15자 이하인지 유효성 검사*/
	if (document.joinForm.memberid.value.length < 4 || document.joinForm.memberid.value.length > 15) {
		alert("아이디는 4자 이상 15자 이하이어야 합니다. \n다시 확인해주세요.")
		document.joinForm.memberid.focus();
		return false;
	}
	
	if (document.joinForm.memberpw.value.length == 0) {
		alert("비밀번호는 필수 입력사항입니다. \n다시 확인해주세요.")
		document.joinForm.memberpw.focus();
		return false;
	}
	
	if (document.joinForm.memberpw.value.length < 4) {
		alert("비밀번호는 4자리 이상이어야 합니다. \n다시 확인해주세요.")
		document.joinForm.memberpw.focus();
		return false;
	}
	
	if (document.joinForm.membername.value.length == 0) {
		alert("이름은 필수 입력사항입니다. \n다시 확인해주세요.")
		document.joinForm.membername.focus();
		return false;
	}
	
	/* 이름은 한글만 가능하도록 정규표현식으로 유효성 검사*/
	var hangul = /^[ㄱㅏ-힣]*$/;
	/* var eng = /^[a-z|A-Z]*$/; */
	
	if (!hangul.test(document.joinForm.membername.value)) {
		alert("이름은 한글만 가능합니다. \n다시 확인해주세요.");
		document.joinForm.membernumber.focus();
		return false;
	}
	
		if (document.joinForm.membernumber.value.length == 0) {
		alert("전화번호는 필수 입력사항입니다. \n다시 확인해주세요.")
		return false;
	}
	
	/* 전화번호는 숫자만 가능하도록 정규표현식으로 유효성 검사*/
	var number = /^[0-9]*$/;
	
	if (!number.test(document.joinForm.membernumber.value)) {
		alert("전화번호는 숫자만 가능합니다. \n다시 확인해주세요.");
		return false;
	}
	
	
	
	return true;	
}