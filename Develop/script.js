//setting up the lists of characters to use for password

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", 
"+", ",", ".", "/",":", ";", "<", "=", ">", "?", "@", "[", "]", "{", "}", "_", "`", "|", "~"];

var numbers = [0,1,2,3,4,5,6,7,8,9];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//empty array to be used to set up the chosen character list
var toUse = [];

//empty array to hold the password generated
var password =[];

//create functions to prompt for inputs and add to the character list if selected
var useUpperCase = function() {
  var upperCase = prompt("Use upper case in password? 'Ok' for 'Yes', 'Cancel' for 'No'", "Yes");
  if(upperCase === "Yes") {
    toUse.push(upperCaseLetters);
  }  return upperCase;
};

var useLowerCase = function() {
  var lowerCase = prompt ("Use lower case in password? 'Ok' for 'Yes', 'Cancel' for 'No'", "Yes");
  if (lowerCase === "Yes"){
    toUse.push(lowerCaseLetters);
  }  return lowerCase;
};

var useSymbols = function() {
  var toSymbols = prompt("Use symbols in password? 'Ok' for 'Yes', 'Cancel' for 'No'", "Yes");
  if (toSymbols === "Yes") {
  toUse.push(symbols);
  } return toSymbols;
};

var useNumbers = function() {
  var toNumbers = prompt("Use numbers in password? 'Ok' for 'Yes', 'Cancel' for 'No'", "Yes");
  if(toNumbers === "Yes") {
    toUse.push(numbers);
  }  return toNumbers;
};

var passwordLength = function () {
  var pwL = prompt("Length of password (between 8 and 128)?");
  return pwL;
};

//function to select a character from the generated nested arrays within the toUse array and then push to the password array

var selectCharacter = function() {
  var randomArrayFromToUse = toUse[Math.floor(Math.random()*toUse.length)];
  
    if (randomArrayFromToUse === upperCaseLetters) {
        password.push(randomArrayFromToUse[Math.floor(Math.random()*upperCaseLetters.length)]);
    } else if (randomArrayFromToUse === lowerCaseLetters) {
      password.push(randomArrayFromToUse[Math.floor(Math.random()*lowerCaseLetters.length)]);
    } else if (randomArrayFromToUse===symbols) {
      password.push(randomArrayFromToUse[Math.floor(Math.random()*symbols.length)]);
    } else if (randomArrayFromToUse === numbers) {
      password.push(randomArrayFromToUse[Math.floor(Math.random()*numbers.length)]);
    }; return;
  };


// Write password to the #password input
function writePassword() {
  //check for user inputs
  var upperCasePromptValue = useUpperCase();
  var lowerCasePromptValue = useLowerCase();
  var symbolsValue = useSymbols();
  var numbersValue = useNumbers();
  var passwordLength2 = passwordLength();

 //ensure that at least one character type was selected
  if (lowerCasePromptValue === null && upperCasePromptValue === null && symbolsValue === null && numbersValue === null) {
    alert("Please select at least one character type to include in your password");
    //verify password length is within accepted parameters  
  } else if (passwordLength2 >=8 && passwordLength2 <=128) { 
    
        
  //create a value for each character as set by the passwordLength function and add it to the password array

    for (var i = 0; i<passwordLength2; i++) {

      selectCharacter();
            
    };

    var passwordInput = password.join('');
    document.getElementById("password").textContent = passwordInput;
  } else {
    alert ("Please select a password length between 8 and 128");
  };
};

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

 