const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const UsernameCon = urlParams.get('username');
console.log(UsernameCon);
const PasswordCon = urlParams.get('password');
Console.log(PasswordCon)

window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	var username = document.form ["myLogin"]["username"];
	var password = document.form ["myLogin"]["password"];
	if(username.value != UsernameCon || password.value != PasswordCon){
		alert("We don't have your account in system, try again.");
		return false;
	}
	else {
		alert("Login Successo");
	}
}

			