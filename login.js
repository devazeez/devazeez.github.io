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
// Shows the password entered in the field    ************
function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


// JS code to calculate the total number of characters entered 

// var tweet = prompt("compose your tweet");
// alert("You have witten " + tweet.length + " character, you have " +  (140 - tweet.length) + " characters remaining");
// if(tweet.length > 140){
//   alert ("you have gone past your boundary")
// }else{
//   alert ("You're doing well with the numbers")
// } + tweetUnder140




// JS code to display only 140 characters
// var tweeter = prompt("Compose your tweet");
// var tweetUnder140 = tweeter.slice(0,140)
// if (tweeter.length > 140){
//   alert ("You have gone past your boundary, here's what's left of your tweet.       " + tweetUnder140);
// }else{
//   alert (tweeter);
// }



// // JS code to make the first letter of every letter a capital and the rest small letters 
// var name = prompt("What's your name?")
// var sName = name.slice(0,1)
// var restName = name.slice(1,name.length).toLowerCase()
// alert (sName.toUpperCase() + restName)


  
// Dog age to human age conveter
// var dogAge = prompt("What is your dog age ?");
// var humanAge = (dogAge - 2) * 4 + 21
// alert ("Your dog age has now been converted to " +  humanAge + " in human age");