function whenValidate() {
	password1 = document.getElementById('passName').value;
	password_confirm = document.getElementById('confirmPass').value;
	pass1_len = password1.length;
	pass2_len = password_confirm.length;
	if (password1 == password_confirm && pass1_len >= 8 && pass2_len >= 8) {
		alert("Successful password!");
	}
	else {
		if(pass1_len < 8 || pass2_len < 8) {
			alert("Please make the password greater than 8 characters");
		}
		else {
			alert("Please try again, passwords did not match");
		}
	}
}
