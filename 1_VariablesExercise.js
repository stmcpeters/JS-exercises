// Week 1 - Variables

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Data Types and Variables

// Exercise 1. Simply declare a variable named 'emptyVariable'
let emptyVariable = "";

// Exercise 2. Declare a variable called 'myName'
let myName = "";

// Exercise 3. Assign your name as the value for 'myName'
myName = "Steph";

// Exercise 4. Declare a variable called dreamDestination and give it the value
// of what your dream vacation destination is.
let dreamDestination = "Puerto Rico";

// Exercise 5. Make the following variables and assignments
// - a variable called num1 with a value greater than 1 and less than 10
// - a variable called num2 with a value of greater than or equal to 1 and less
// than or equal to 10
let num1 = 7;
let num2 = 10;

// Exercise 6. Write a comment below explaining the difference between the rules
// for num1 and num2 from Exercise 5. What numbers would be valid values for
// num2 but not num1?
// The difference between the rules for num1 and num2 is that num2 can also include the values 1 and 10. The rules for num1 strictly ask for values between, and do not include 1 or 10.

// Exercise 7. Now we will try some addition.
// a. Assign the the values of 4 and 6 to num1 and num2, respectively.
// b. Make a new variable called 'theSum', and use 'num1' and
// 'num2' to assign its value using the "+" operator.
num1 = 4;
num2 = 6;
let theSum = num1 + num2;
console.log(theSum);

// Exercise 8. Now we will try some multiplication.
// Make a new variable called 'theProduct', multiply num1 and num2 and assign
// the resulting value to 'theProduct'.
let theProduct = num1 * num2;

// Exercise 9.
// Make a new variable called 'statement' and using 'myName' and
// 'dreamDestination' and the concatenation method of your choice, make the
// value of statement to be:
// "Hi, my name is <your name>, and I can't wait to visit <your destination>!"
let statement = "Hi, my name is " + myName + ", and I can't wait to visit " + dreamDestination + "!";

// *NOTE* For the following exercises, put your answers in the line below
// the description of each exercise. For example, below a prompt, you may see:
// let myAnswerForExercise10= "";
// If your answer is "foo", then fill in the line to be:
// let myAnswerForExercise10 = "foo";

// Exercise 10. What is the data type of the value stored in 'dreamDestination',
// place your answer in the quotes below:

const myAnswerForExercise10 = "string";

// Exercise 11. What is the data type of the value stored in 'product',
// place your answer in the quotes below:

const myAnswerForExercise11 = "number";

// Exercise 12. What do you think the value of emptyVariable is?
// Place your answer below:

const myAnswerForExercise12 = "undefined";

// Exercise 13. If
const A = "R";
const B = 1;
const C = 4;
const D = "D";

// What is the value of B + C
const myAnswerForExercise13 = "5";

// Exercise 14 What is the value of
// A + "n" + D
const myAnswerForExercise14 = "RnD";

// Exercise 15 What is the value of
// A + B * 2 + D + C / 2:
const myAnswerForExercise15 = "R2D2";

// Exercise 16 What is the value of A * B
const myAnswerForExercise16 = "NaN";

// Exercise 17 What is the value of true || false
const myAnswerForExercise17 = "true or false";

// Exercise 18 What is the value of 1 === "1"
const myAnswerForExercise18 = "false";

// Exercise 19 What is the value of 1 == "1"
const myAnswerForExercise19 = "true";

// Exercise 20 What is the value of 1 < 1
const myAnswerForExercise20 = "false";

// Exercise 21 What is the value of 1 < 2 < 3
const myAnswerForExercise21 = "true";

// Exercise 22 What is the value of 2 < 1 < 3
const myAnswerForExercise22 = "true";

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// I think these were pretty easy, but I got tripped up on the last one because I forgot 0 = false and 1 = true. I used a reference from Codeacademy for help.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.

// -------------------
// CONDITIONALS EXERCISES
// -------------------

// In these exercises, you will be working on conditional statements,
// namely the if / else if / else and switch/case conditionals.

// For these exercises, you will place your code in a function block.
// If you don't know what a function is yet, that's ok, your code will be the
// same. The variables will be defined for you, you just have to plug in the
// logic.

// For example, if asked for exercise 0 to assign the value of myAnswer to the sum
// of num1 and num2, and were given this construct:

// function exercise0(num1, num2) {
//   let myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 0 below here:
//   // ------------------------------------------
//
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// You would put your code between the "below here"
// and "above here" blocks as shown:

// function exercise0(num1, num2) {
//   let myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 0 below here:
//   // ------------------------------------------
//   myAnswer = num1 + num2;
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// EXERCISE 1.
// First reassign the value of `answer1` so that it has the value of:
// "num1 is small"
// Write an if statement that checks if a variable `num1` is greater than 10.
// If it is, then within your if statement code change the value of answer1 so
// that its new value would be a string that says:
// "The value of num1 is <num1 value> and is greater than 10".

function exercise1(num1) {
    let answer1 = "num1 is small";
    // ------------------------------------------
    // Write your code for exercise 1 below here:
    // ------------------------------------------
  if (num1 > 10){
    answer1 = `The value of num1 is ${num1} and is greater than 10`;
  }
    // ------------------------------------------
    // And above here
    // ------------------------------------------
    return answer1;
  }
  
  // EXERCISE 2.
  // Write an if/else conditional statement that if given a number will assign
  // a string value of:
  // "<num2 value> is even" to `answer2`,
  // if `num2` is even
  // and a value of "<num2 value> is odd" to `answer2`,
  // if `num2` is odd.
  // ie. if num2 has a value of 4 then the message should read:
  // "4 is even"
  
  function exercise2(num2) {
    let answer2 = '';
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
  if (num2 % 2 === 0) {
    answer2 = `${num2} is even`;
  } else {
    answer2 = `${num2} is odd`;
  }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer2;
  }
  
  // EXERCISE 3.
  // Write an if/else if/else block such that if `num3` is positive, then
  // answer3 is assigned the string value of:
  // "<num3 value> is positive"
  // if `num3` is negative, then the value should be:
  // "<num3 value> is negative"
  // otherwise if the value is zero it should return
  // "<num3 value> is zero"
  
  function exercise3(num3) {
    let answer3;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
  
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer3;
  }
  
  // EXERCISE 4.
  // Write an if/else statement such that if `varA` and `varB` are strings or
  // numbers and they have equal values, then change the value of answer4 to
  // "varA and varB are equal"
  // otherwise assign a value of "varA and varB differ"
  
  function exercise4(varA, varB) {
    let answer4;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
  
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer4;
  }
  
  // EXERCISE 5.
  // In exercise 4, what are some of the unexpected cases where `varA` and `varB`
  // seemed like they are equal, but would not pass the tests? In your analysis
  // consider other data types beside strings and variables.
  
  // EXERCISE 6.
  // Here, assign the value of true to answer6 if:
  // `varA` and `varB` are equal, but `varA` or `varB` does not equal `varC`
  // in the event this is not the case, change the value of answer6 to false
  function exercise6(varA, varB, varC) {
    let answer6 = "unassigned";
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
  
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer6;
  }
  
  // EXERCISE 7.
  // Use a switch conditional statement with case clauses such that if `num7` is
  // a number and it has a value of 1 that `answer7` is assigned the string:
  // "You won!"
  // if num7 is 7, then answer7 should be:
  // "You are lucky!"
  // if num7 is 101, then answer7 should be:
  // "Welcome to coding 101!"
  // if num7 is 1000000, then answer7 should be:
  // "You are one in a million!"
  // Othewise, assign answer7 a value of:
  // "Thanks for that!"
  
  function exercise7(num7) {
    let answer7;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
  
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer7;
  }
  
  // EXERCISE 8.
  // Using any conditional assign the value of true to answer8 if:
  // the values of amount1 and amount2 are between the values of
  // minimum and maximum
  // if not, assign a value of false to answer8
  function exercise8(amount1, amount2, minimum, maximum) {
    let answer8;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
  
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer8;
  }
  
  // EXERCISE 9.
  // In this exercise, if `item` is a number, follow the rules given in Exercise 7
  // except that `answer7` is replaced by `answer9`
  // If `item` is not a number, then assign a value to answer9 of:
  // "Please send a number, that was a <data type>."
  // for example, if item===true, the value should be:
  // "Please send a number, that was a boolean."
  function exercise9(item) {
    let answer9;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
  
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer9;
  }
  
  // EXERCISE 10.
  // This question is a modified version of a classic programming question
  // called "Fizz Buzz"
  // Using a conditional, assign a value of:
  // "Fizz" to `answer10` if the value of `num10` is divisible by 3
  // "Buzz" to `answer10` if the value of `num10` is divisible by 5
  // "Fizz Buzz" to `answer10` if the value of `num10` is divisible by 15
  // and if none of these conditions are satisfied, then assign the value of
  // `num10` to `answer10`
  
  function exercise10(num10) {
    let answer10;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
  
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer10;
  }
  
  // Congrats, you made it to the end! You rock!
  // Did you find this easy or hard? If you used references, which ones helped you?
  // Please answer in a comment below.
  //
  
  // Email your file to us or commit your file to GitHub and email us a link.
