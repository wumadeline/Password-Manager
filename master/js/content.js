// Javascript File

var username;
var password;

// creating an alert on the page
//alert("Your password is 123456");

$(document).ready(function(){
	// code
	if ($('.error').length == 0) {
		$('input#username').val('your username')
		$('input#password').val('your password')
		$('input.button').click();
	}
});