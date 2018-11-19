"use strict"

$('document').ready(function(){
	
	$('#sbm').click(function(){
		
		var formData = {};
		formData.id = $('#fId').val();
		formData.pwd = $('#fPwd').val();
		
		$.ajax({
			url : apiAddr+'/SignUp',
			type : 'post',
			data : JSON.stringify(formData),
			success : function(result){

				if(result.status == "success"){
					alert('가입이 완료되었습니다!');			
					location.href = "signIn.html";
				}else if(result.status == "usedId"){
					alert('이미 사용중인 아이디입니다.');
				}else{
					alert('에러가 발생했습니다 관리자에게 문의해주시길 바랍니다!', result.message);
				}
				
			}
		})
		
	})
	
})
