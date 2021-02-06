// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
var lowerLetters = "abcdefghijklmnopqrstuvwxyz".split();
var numbers = "0123456789".split();
var specialChars = "!@#$%^&*()_+-=`~?/.>,<".split();
var choices = "";

// Write a function that allows us to prompt the user. Should be written in a function. 
// In that function we are going to ask the user how many words we want the password to be. 
function generatePassword() {
  var passLength = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  // After that prompt, we need a check to make sure they chose between 8- 128 characters
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert('Password length must be between 8 and 128 characters/a number.');
    return 'Password length must be between 8 and 128 characters/a number.';
  }
  // Next we will prompt them for what characters they want.
  var confirmUpper = confirm("Would you like to use uppercase letters?");
  if (confirmUpper == true) {
    choices = choices + upperLetters
  } else {
    choices = choices
  }
  var confirmLower = confirm("Would you like to use lowercase letters?");
  if (confirmLower == true) {
    choices = choices + lowerLetters
  } else {
    choices = choices
  }
  var confirmNum = confirm("Would you like to use numbers?");
  if (confirmNum == true) {
    choices = choices + numbers
  } else {
    choices = choices
  }
  var confirmSpec = confirm("Would you like to use special characters?");
  if (confirmSpec == true) {
    choices = choices + specialChars
  } else {
    choices = choices
  }

  // need to make sure that the user picked at least one character type for password.
  if (!confirmUpper && !confirmLower && !confirmNum && !confirmSpec) {
    alert('You need to pick at least one character type');
    return;
  }
  
  //Write a function to randomize what characters are chosen, taking in the choices previously.
  // Created a new variable in order to store the result, then joined the array.
  var password = [];
  for (var i = 0; i < passLength; i++) {
    var choicesTogether = choices[Math.floor(Math.random() * choices.length)]
    password.push(choicesTogether);
  }
  return (password.join(""));
}

// After we turn into a string, we write the password to the page using(.value)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
