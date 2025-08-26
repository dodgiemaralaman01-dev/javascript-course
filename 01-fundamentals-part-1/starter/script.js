// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("GUMANA KA");

// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 2004;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job); 

// age = 51;

// let lastName = "Doe"

// // do not do this
// // let 3years = 3;
// // let jonas&matilda = "JM";
// // let = new

// console.log("=== DATA TYPES ===");

// // Number
// age = 24;
// console.log(age);
// console.log(typeof age);

// //String
// let username = "mark";
// console.log(username);
// console.log(typeof username);

// //Boolean
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// // dynamic variable
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// //change into string
// dynamicVariable = "Now I'm a string";
// console.log(dynamicVariable, typeof dynamicVariable);

// //change into a boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// /////
// // Basic Operators - Math Operators
// console.log("==== MATH OPERATORS")

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah  = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations");
// console.log("Addition", 10 +5);
// console.log("Subtraction", 20 -8);
// console.log("Multiplication", 4 * 7);
// console.log("Division", 15 / 3);
// console.log("Exponentiation", 2 ** 3);

// // Math with strings
// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old!")

// /////
// console.log ("=== ASSIGNEMENT OPERATORS ====");

// let x = 10 + 15;
// console.log("x start as:", x);

// x += 10;
// console.log("x start as:, x");

// x *= 4;
// console.log("x start as:, x");

// x /= 2;
// console.log("x start as:, x");

// x++;
// console.log("x start as:, x");

// x++;
// console.log("x start as:, x");

// /////
// console.log("=== COMPARISON OPERATORS");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah); 
// console.log(ageSarah >= 18); 
// console.log(ageJonas < 30); 

// console.log("Number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10); 
// console.log(18 >= 18);
// console.log(16 <= 15);

// // storing comparison
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// console.log("Complex comparison"); 
// console.log(now - 1991 > now - 2018);

// let z, y; 'Doe'
// z = y = 25 - 10 - 5;
// console.log(z, y);

// // How it works: 25 - 10 - 5 = 10, then y = 10, then x = 10

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// // Without parentheses would be wrong:
// // ageJonas + ageSarah / 2 = 46 + 9.5 = 55.5 ❌

////////////////////////////////////
// Coding Challenge #1 - BMI Calculator (SOLUTION 1)

// TEST DATA 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// Your code here:
// 1. Calculate BMIs
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// 2. Create markHigherBMI variable
// const markHigherBMI = BMIMark > BMIJohn;

// 3. Log results to console
// console.log("Mark's BMI:", BMIMark);
// console.log("John's BMI:", BMIJohn);

// console.log("Mark has higher BMI:", markHigherBMI);

////////////////////////////////////
// JavaScript Fundamentals - Hour 2
// Coding Challenge #1 - BMI Calculator (SOLUTION 2)

// -------- TEST DATA 1 --------
// Mark weights 78 kg and is 1.69 m tall
// John weights 92 kg and is 1.95 m tall
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// -------- TEST DATA 2 --------
// Mark weights 95 kg and is 1.88 m tall
// John weights 85 kg and is 1.76 m tall
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// 1. Calculate BMIs
// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// 2. Create markHigherBMI variable
// const markHigherBMI = BMIMark > BMIJohn;

// 3. Log results to console
// console.log(`Mark's BMI: ${BMIMark.toFixed(2)}`);
// console.log(`John's BMI: ${BMIJohn.toFixed(2)}`);
// console.log(`Does Mark have a higher BMI than John? ${markHigherBMI}`);


////////////////////////////////////
// Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);

// console.log(`Comparisons too: ${5 > 3}`);
// console.log(`Just a regular string`);

// // if else statements
// const age = 10;

// if (age >= 18) {
//   console.log("Sarah can start driving a license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }


// console.log(Boolean(0)); //falsy value
// console.log(Boolean(undefined)); //falsy value
// console.log(Boolean("Jonas")); //truthy value
// console.log(Boolean({})); //truthy value
// console.log(Boolean("")); //falsy value

// Reuse your BMI calculation from Challenge #1
const massMark = 55;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output

// Coding Challenge #2

// Solution 1
// if (BMIMark > BMIJohn) {
//   console.log(
//     `Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(
//       1
//     )})!`
//   );
// } else {
//   console.log(
//     `John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(
//       1
//     )})!`
//   );
// }

// Solution 2
if (BMIMark > BMIJohn) {
  console.log("Marks's BMI ($){BMIMark}) is higher than John's (${BMIJohn})");
} else {
  console.log("John's BMI ($){BMIJohn}) is higher than Mark's (${BMIMark})");
}