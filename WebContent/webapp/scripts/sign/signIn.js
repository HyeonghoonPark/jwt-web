"use strict"

$("document").ready(function(){
	
	$('#btn').click(function(){
		
		var formData = {};
		formData.id = $('#fId').val();
		formData.pwd = $('#fPwd').val();
		
		$.ajax({
			url : apiAddr+'/SignIn',
			type : 'POST',
			data : JSON.stringify(formData),
			success : function(result){
				
				if(result.status=='success'){
					$.cookie('SESSION_USER_ID', 'hyeonghoon', {
				        expires: 1,	// 1일 보관
				        path: '/'
				    });
					$.cookie('SESSION_USER_NAME', '박형훈', {
				        expires: 1,	// 1일 보관
				        path: '/'
				    });
					$.cookie('SESSION_CHECK_ID', '1', {
				        expires: 1,	// 1일 보관
				        path: '/'
				    });
					$.cookie('SESSION_POST_NAME', '컨버전스연구소', {
				        expires: 1,	// 1일 보관
				        path: '/'
				    });
					$.cookie('SESSION_GD_NAME', '사원', {
				        expires: 1,	// 1일 보관
				        path: '/'
				    });
					location.href = '../main/main.html'
				}else if(result.status='NotFindUser'){
					alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
				}else if(result.status='fail'){
					alert('에러가 발생했습니다 관리자에게 문의해주시길 바랍니다!', result.message);
				}
				
			}
		})
		
	})
	
})
	


	