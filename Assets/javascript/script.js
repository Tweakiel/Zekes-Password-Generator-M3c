// Assignment Code
/*
1.Prompt User (length 8<128)
  specific cases; char type (lower/upper case, special char, and or numbers)

2. validate input
3. put password into text.
*/

//declare variables char, and input

let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

let lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let capitalAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var generateBtn = document.querySelector("#generate");



//prompts for entry and criteria variables are made in global so that they can be called anywhere not just generate passowrd function
let promptEnter;
let promptNumber;
let promptSpecialChar;
let promptCapital;
let promptLower;

//returned criteria result for generated password
let criteria;



//generate password
function generatePassword() {


  let placeholderPassword = [];

  promptEnter = parseInt(prompt("How many characters would you like for your password (min:8, max:132)"));

  //if statement for criteria and user error
  //NotaNumber
  if (isNaN(promptEnter)) {

    alert("Input Invalid. Not A Number!");
    return;

  } else if (!promptEnter) {


    alert("Please put a value.");

    return;

  }

  else if (promptEnter < 8 || promptEnter > 128) {

    promptEnter = alert("It is required to pick a length between 8 and 128. Try again.");

    return;

    //user put proper input proceed criteria using confirm()
  } else {

    promptCapital = confirm("do you want Capital characters?");
    promptLower = confirm("do you want lower characters?");
    promptNumber = confirm("would like to add numbers to your password?");
    promptSpecialChar = confirm("How about special charcters (eg. !,@,~)");

  };

  //now dictate possible outcomes for choices

  //4 no
  if (!promptCapital && !promptLower & !promptNumber && !promptSpecialChar) {

    alert("A Criteria is needed for a random generated password. Try Again.");
    return;


  }//to combine and generate, i will use .concat method to combine the multiple arrays, in this case i will combine all 4 arrays together.

  if (promptCapital) {

    criteria = placeholderPassword.concat(capitalAlpha);
  }
  if (promptLower) {
    criteria = placeholderPassword.concat(lowerAlpha);
  }
  if (promptNumber) {
    criteria = placeholderPassword.concat(numbers);
  }
  if (promptSpecialChar) {
    criteria = placeholderPassword.concat(specialChar);
  }
  //TO CHECK IF IT ARRAYS ARE COMBINED I PUT CONSOLE.LOG 
  //used after declaring all possible outcomes (line ~154)
  

  //randomizer from criteria, using for loop with placeholderpassword var from earlier 
  for (let i = 0; i < promptEnter; i++) {

    let chosenCriteria = criteria[Math.floor(Math.random() * criteria.length)];

    placeholderPassword.push(chosenCriteria);

    //this console log shows the randomized length and characters
    console.log(chosenCriteria);
  }

  console.log(placeholderPassword);

  //this uses the combined arrays (chosen criteria) and combines with the placeholder array and then the join method returns it as a string after concatenating
  let password = placeholderPassword.join("");

  //this pastes the generated password on the 'textbox'
  return password;

  //AGAIN TO CHECK IF PASSWORD IS REAL AND ARRAYS ARE BEING COMBIND I PUT CONSOLE.LOG FOR PROOF
}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
