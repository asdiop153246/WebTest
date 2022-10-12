const queryString = window.location.search;
 	console.log(queryString);

 	const urlParams = new URLSearchParams(queryString);
 	const UsernameCon = urlParams.get('Username');
	 console.log(UsernameCon);
 	const passwordCon = urlParams.get('Password');
	
window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("Mylogin");
 	form.onsubmit = checkLogin;
}

function checkLogin(){
	var username = document.forms["Mylogin"]["Username"];
    var password = document.forms["Mylogin"]["Password"];
	if(username.value != UsernameCon || password.value != passwordCon)
	{
		alert("Wrong password,please try again");

		return false;
	}
	else
	{
		alert("Success");
	}
}