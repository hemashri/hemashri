var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "hema" && password == "5498"){
alert ("Login successfully");
window.location = "room.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("incorrect username or password");
// Disabling fields after 3 attempts.
if( attempt == 0){
	alert("you have been blocked for sometime..try again later");
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}

}
}
 