window.onload = pageLoad;
var Input_regis = [];

function pageLoad(){
	var form = document.getElementById("Myform");
 	form.onsubmit = validateForm;
}
function validateForm() {
    var pass = document.forms["Myform"]["Password"];
    var repass = document.forms["Myform"]["Retypepassword"];
    if(pass.value == repass.value)
    {
        alert("Register success");
    }
    else if(pass.value != repass.value)
    {
        alert("Wrong password,please try again");
        
        return false;
    }
}
