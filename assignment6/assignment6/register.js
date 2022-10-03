window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var pass = document.forms["myForm"]["password"];
    var repass = document.forms["myForm"]["Repassword"];
    if(pass.value == repass.value){
        alert("Register Successo");
    }
    else if(pass.value != repass.value){
        alert("Password does not match, type again.");
        return false;
    }
}
function ResetForm(){
var clearform = document.getElementById("myForm")


}