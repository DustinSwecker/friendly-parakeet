//setting up the lists of characters to use for password

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", 
"+", ",", ".", "/",":", ";", "<", "=", ">", "?", "@", "[", "]", "{", "}", "_", "`", "|", "~"];

var numbers = [0,1,2,3,4,5,6,7,8,9];

// Write password to the #password input
function writePassword() {
  //check for user inputs
  var useUpperCase = prompt("Use upper case in password? 'Ok' for 'Yes', 'Cancel' for 'No'", "Yes");
  var useLowerCase = prompt("Use lower case in password? 'Ok' for 'Yes', 'Cancel' for 'No'", "Yes");
  var useSymbols = prompt("Use symbols in password? 'Ok' for 'Yes', 'Cancel' for 'No'", "Yes");
  var useNumbers = prompt("Use symbols in password? 'Ok' for 'Yes', 'Cancel' for 'No'", "Yes");
  var passwordLength = prompt("Length of password (between 8 and 128)?");
  //verify password length is within accepted parameters
  if (passwordLength >=8 && passwordLength <=128) {

    
    //functionality to create the list of characters to use in the password
      var toUse = [];
      if(useUpperCase === "Yes") {
        toUse.concat(upperCaseLetters);
      }; 
    
      if (useLowerCase === "Yes") {
        toUse.concat(lowerCaseLetters);
      };
    
      if (useSymbols === "Yes") {
        toUse.concat(symbols);
      };
    
      if (useNumbers === "Yes") {
        toUse.concat(numbers);
      };

    console.log(toUse);

    var password =[];

    for (var i = 0; i<=passwordLength; i++) {
      //adding randomized elements based on input on passwordLength from the toUse array to a password
      password.push(toUse[(Math.floor(Math.random*toUse.length))]);
    };
    document.getElementById("#password").innerHTML=password.toString();

  } else {
    alert ("Please select a password length between 8 and 128");
  };
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

 


 
 