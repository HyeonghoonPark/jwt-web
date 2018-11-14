"use strict"

var apiAddr = "/jwt-api";
var webAddr = "/jwt-web";

$.ajaxSetup({
	dataType : "json",
	contentType : "application/json;charset=UTF-8",
	beforeSend : function(xhr){
		xhr.setRequestHeader('loginToken', $.cookie('loginToken'));
	}
})