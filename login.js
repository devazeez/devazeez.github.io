// Defining key Elements           ************
var red = document.getElementById('color')
var green = document.getElementById('color2')
const correctEmail = "l.adeosun.la@gmail.com";
const second = "azeez@gmail.com";
const correctPassword = "azeez12345";
// Gets the enter button and validates the fields   ************
document.getElementById('button').onclick = function(){
    let text;   
    var email = document.getElementById('email').value;
    var  password = document.getElementById('password').value;
if(email == correctEmail && password == correctPassword){
    text = "You're Good To Go!! "
    
    // window.location = "index.html"; // Redirecting to other page.
    // window.location.href = "index.html";

    window.location.replace("index.html");
    return false;
}else{
    document.getElementById('email').style.borderColor = "red"
    document.getElementById('password').style.borderColor = "red"
    text = "Invalid login credentials"
    // window.location = "login.html";
}
    document.getElementById('para').innerHTML = text;
}   

function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
   




