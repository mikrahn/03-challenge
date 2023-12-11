// Assignment code here

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(passwordArray) {
  typeof passwordArray;
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// create the necessary character arrays
lowerCaseAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

upperCaseAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "&",
  "*",
  "(",
  ")",
  "?",
];

numberChracters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

characterOptions = ["special", "numeric", "uppercase", "lowercase"];

// the slect_char function gathers the character types from the user input and populates the charSet array.

function select_char() {
  charSet = [];

  for (let i = 0; i < 4; i++) {
    charType = prompt(
      "Enter a character type one at a time and hit enter. The allowable characters are: special, numeric, uppercase, lowercase."
    ).toLocaleLowerCase();

    // if (characterOptions.includes(prompt)) {
    //   console.log(charSet);

    switch (charType) {
      case "special":
        var special = charType;
        charSet.push(special);
        

      case "numeric":
        var number = charType;
        charSet.push(number);
        

      case "uppercase":
        var upper = charType;
        charSet.push(upper);
        

      case "lowercase":
        var lower = charType;
        charSet.push(lower);
      case " ":
        continue;
    }
  }
  // console.log(charSet);
}

// the selectLenth function saves the user input for the length of the password and returns it for use by the generatePassword() function.

function selectLength() {
  passwordLength = Number(
    prompt("Enter the length of your password (8 to 128 characters")
  );
  // console.log(typeof passwordLength);
  if (typeof passwordLength !== "number") {
    selectLength();
  }
  // console.log(passwordLength);
  return passwordLength;
}

passwordArray = [];


function generatePassword(passwordLength) {
  
  // console.log(charSet);
  while (passwordLength) {
    if (charSet.includes("special")) {
      var randomLower =
      specialCharacters[Math.floor(specialCharacters.length * Math.random())];        
      passwordArray.push(randomLower);      
      passwordLength = passwordLength - 1;
      
      

    } if (charSet.includes("numeric")) {
      var randomNumber =
      numberChracters[Math.floor(numberChracters.length * Math.random())];
      passwordArray.push(randomNumber);
      passwordLength = passwordLength - 1;
      
    }
     if (charSet.includes("uppercase")) {
      var randomUpper =
      upperCaseAlphabet[Math.floor(upperCaseAlphabet.length * Math.random())];
      passwordArray.push(randomUpper);
      passwordLength = passwordLength - 1;
      

    } if (charSet.includes("lowercase")) {
      var randomSpecial =
      lowerCaseAlphabet[Math.floor(lowerCaseAlphabet.length * Math.random())];
      passwordArray.push(randomSpecial);
      passwordLength = passwordLength - 1;
      
    }
      
    
  }

  password = passwordArray.toString();
  password = password.replace(/,/g, "");

  // console.log(randomLower);
  //     console.log(passwordArray);

  return password;
}

selectLength();

select_char();

generatePassword(passwordLength);

// console.log(passwordArray);
