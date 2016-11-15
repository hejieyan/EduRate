// Checks each field to see if they are empty
// TODO: dynamically show incorrect fields to the user
// TODO: Minimum Username, firstname, lastname length
function checkEmpty() {
	if (firstName == "" || firstName == null) {
		window.alert("Please enter your first name!");
		return false;
	}
	if (lastName == "" || firstName == null) {
		window.alert("Please enter your last name!");
		return false;
	}
	if (userName == "" || userName == null) {
		window.alert("Please enter a user name!");
		return false;
	}
	if (password == "" || password == null) {
		window.alert("Please enter a password!");
		return false;
	}
	if (passwordVerify == "" || passwordVerify == null) {
		window.alert("Please enter a password verificatoin!");
		return false;
	}
	if (email == "" || email == null) {
		window.alert("Please enter an email!");
		return false;
	}
	if ( dateOfBirth == "" || dateOfBirth == null) {
		window.alert("Please enter a valid date of birth!");
		return false;
	}
	return true;
}

function checkFirstAndLastName() {
	if (!/[a-z]/.test(firstName)) {
		window.alert("Your first name is invalid!");
		return false;
	} else if (!/[a-z]/.test(lastName)) {
		window.alert("Your last name is invalid!");
		return false;
	}
	return true;
}

function checkUserName() {
	if (/\s$/.test(userName)) {
		window.alert("Your username cannot have spaces!")
		return false;
	}
	return true;
}

function checkPassword() {
	// TODO: FIX
	if (/{5,}/.test(password)) {
		window.alert("Your password must be greater than 5 characters!");
		return false;
	}
	if (passwordVerify == password) {
		window.alert("Your password verification is not the same!");
		return false;
	}
	return true;
}

function checkEmail() {
	// TODO: FIX
	if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email))) {
		window.alert("Please enter a valid email!");
		return false;
	}
	return true;
}

function checkDate() {
	if (/^(18|19|20)\d\d[-/](0[1-9]|1[012])[-/](0[1-9]|[12][0-9]|3[01])$/g.test(dateOfBirth)) {
		window.alert("Please enter a valid date of birth!");
		return false
	}
	return true;
}

function validateForm() {
// TODO: Better way to validate
	firstName = document.forms["registrationForm"]["firstName"].value;
	lastName = document.forms["registrationForm"]["lastName"].value;
	userName = document.forms["registrationForm"]["userName"].value;
	password = document.forms["registrationForm"]["password"].value;
	passwordVerify = document.forms["registrationForm"]["passwordVerify"].value;
	email = document.forms["registrationForm"]["email"].value;
	dateOfBirth = document.forms["registrationForm"]["dateOfBirth"].value;
	
// Better way to do this
	if ((checkEmpty() == true) && checkFirstAndLastName() == true && checkUserName() == true && checkPassword() == true && checkEmail() == true && checkDate() == true) {
		window.alert("You are now registered!\nPlease check your email for verification!")
		return true;	
	} else {
		return false;
	}
}
