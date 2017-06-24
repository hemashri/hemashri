
 // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var person= document.getElementById("person").value;
if ( person<="10"){
alert ("available");
window.location = "resort.html"; // Redirecting to other page.
return false;
}
else{
// Decrementing by one.
alert("unavailable");
// Disabling fields after 3 attempts.

return false;


}
}
 