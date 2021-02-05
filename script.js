// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperLetters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split()];
var lowerLetters = ['abcdefghijklmnopqrstuvwxyz'.split()];
var numbers = ['0123456789'.split()];
var specialChars = ['!@#$%^&*()_+-=`~?/.>,<'.split()];

// Write password to the #password input
function writePassword() {
  var confirmUpper = confirm("Would you like to use uppercase letters?");
  var confirmLower = confirm("Would you like to use lowercase letters?");
  var confirmNum = confirm("Would you like to use numbers?");
  var confirmSpec = confirm("Would you like to use special characters?")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
