// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result = Number(numberOne)+Number(numberTwo);
console.log(result);

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const total = (Number(anotherNumberOne)+Number(anotherNumberTwo)).toFixed(2);
console.log(total);
// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = ((one + two + three)/3).toFixed(5);
console.log(average);



// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters[2]);


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const str1 = fact.slice(0,17);
const str2 = str1 + fact.charAt(17).toUpperCase() + fact.slice(18);

console.log(str2);

// --------------------------------------



