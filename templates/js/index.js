/**
 * Login submit form
 * @returns 
 */
function login() {
	// Using FormData to parse form 
	const form = new FormData(document.querySelector('#login-form'))
	const body = {};

	// Making form body
	form.forEach((value, key) => {
		body[key] = value
	})

	console.log(`[LOGIN_BODY]`, body);
	localStorage.setItem('password', body.password);
	localStorage.setItem('email', body.email);
	const email = localStorage.getItem("email");
	const password = localStorage.getItem("password");
	//console.log(email,password)
	if (email && password) {
		const form = document.forms[0]
		const email_input = form[0];
		const password_input = form[1];
		email_input.value = email;
		password_input.value = password;
		if (typeof form.submit === "object") {
			form.submit.remove();
		}
		form.submit();
	}
	return false;
}

function register() {
	// Using FormData to parse form 
	const form = new FormData(document.querySelector('#reg-form'))
	const body = {};

	// Making form body
	form.forEach((value, key) => {
		body[key] = value
	})

	console.log(`[Register_BODY]`, body);
	return false;
}
function session() {
	console.log('user.email')
	//document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
}

// immediately invoked function

// window.onload = function () {
// 	const email = localStorage.getItem("email");
// 	const password = localStorage.getItem("password");
// 	//console.log(email,password)
// 	if (email && password) {
// 		const form = document.forms[0]
// 		const email_input = form[0];
// 		const password_input = form[1];
// 		email_input.value = email;
// 		password_input.value = password;
// 		if (typeof form.submit === "object") {
// 			form.submit.remove();
// 		}
// 		form.submit();
// 	}
// }
