function register(e){
	e.preventDefault();

	var email = document.getElementById('email').value;
	var password1 = document.getElementById('password1').value;
	var password2 = document.getElementById('password2').value;
	var file = document.getElementById('file').value;
	var msg = document.getElementById('msg');

	if(email === '' || password1 === '' || password2 === '' || file === ''){
		msg.className = "alert alert-danger";
		msg.innerHTML = "Please fill out all feilds!";
	} else {
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length){
			msg.className = "alert alert-danger";
			msg.innerHTML = "Please use a valid email";
		} else{
			if(password1 != password2){
				msg.className = "alert alert-danger";
				msg.innerHTML = "Password doesn't match";
			} else{
				msg.className = "alert alert-success";
				msg.innerHTML = "You have successfully completed the registration";
			}
		
		}
		
	}
};
document.getElementById('regForm').addEventListener('submit', register, false);
