// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

let i = 10;
do {
  console.log(i);
  i--;
} while (i >= 1);


for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let i = 7;
while (i <= 27) {
  console.log(i);
  i++;
}

let i = 7;
do {
  console.log(i);
  i++;
} while (i <= 27);

for (let i = 7; i <= 27; i++){
  console.log(i);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let i = 0;
while (i <= 100) {
  console.log(i);
  i += 10;
}

let i = 0;
do {
  console.log(i);
  i += 10;
} while (i <= 100);

for (let i = 0; i <= 100; i += 10) {
  console.log(i);
}
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour--;
}
// This loop above is infinite because its decreasing from 1 and will never be false due to the variable never becoming greater than 2 (loop will forever be true). 
let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let i = 0;
do {
  console.log(i);
  i += 5;
} while (i <= 225);

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
let favoriteNumber = 52;

for (let i = 0; i <= 100; i++) {
  if (i === favoriteNumber) {
    console.log(i + " my favorite number!");
  } else {
    console.log(i + " not my favorite number");
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
// Do while loops are used when you need the loop to complete at least once regardless of the conditions. While loops are best when the number of iterations are unknown or not fixed because it re-checks the condition before every iteration. For loops are best when you know the exact number of iterations.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++ ) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// These exercises were relatively easy but I was struggling with nested loops. Freecodecamp's resources on nested loops were the easiest reference to understand.

// Email your file to us or commit your file to GitHub and email us a link.
