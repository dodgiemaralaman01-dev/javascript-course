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
// const massMark = 55;
// const heightMark = 1.69;
// const massJohn = 95;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output

// Coding Challenge #2

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
// if (BMIMark > BMIJohn) {
//   console.log("Marks's BMI ($){BMIMark}) is higher than John's (${BMIJohn})");
// } else {
//   console.log("John's BMI ($){BMIJohn}) is higher than Mark's (${BMIMark})");
// }

// Type conversion and coercion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// Automatic Type Coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" * "2");

// let n = '1' + 1; 
// console.log(n);

// n = n - 1;
// console.log(n);

// type conversion = explicit/manual (recommend)
// type coercion = implicit/automatic (javascript does itself)



// Equality - Strict

// const age = '18';
// if (age === 18) console.log('You just became an adult (strict)');
// if (age == 18) console.log('You just became an adult :D (loose)');

// console.log('18' === 18);
// console.log('18' == 18); //coercion happens
// console.log(18 === 18);

// why == can be dangerous
// console.log('0' == 0);
// console.log(0 == false);
// console.log('0' == false);
// console.log(null == undefined); //special case

// console.log('' == 0);
// console.log('   ' == 0);

// // best practice
// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log('Cool! 23 is an amazing number!');
// } if (favourite == 23) {
//   console.log('23 string is also a cool number');
// } else if (favourite === 9) {
//   console.log('9 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7 or 9');
// }

// if (favourite !== 23) console.log('Why not 23?');

// "Test equality operators"
// 1.) Create a variable 'userInput' with string '25'
// 2.) Compare using both === and === with number 25
// 3.) Log the results and observe the difference
// 4.) Convert the string explicitly and test again
// 5.) Try with different values: '0', '', false, null"  


// Logical Operators

// const hasDriversLicense = false; // A
// const hasGoodVision = false; // B

// console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
// console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
// console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

// const isTired = true; // C
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Mar is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }


// More complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = true;

// Can drive if: (age >= 18 OR has permission) AND has experience
// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

//Test with different values
// console.log("Age 20, permission true, experience false");
//           (age >= 18 || hasPermission) && hasExperience;

// "Create a club entry system"
// 1.) Create variables: age (number), hasID (boolean), isVIP (boolean)
// 2.) Entry rules: (age >= 21 AND hasID) OR isVIP)
// 3.) Test with different combinations;
//     - age 25, hasID true, isVIP false (should enter)
//     - age 19, hasID true, isVIP true (should enter)
//     - age 19, hasID false, isVIP false (should not enter)
// 4.) Use if/else to log appropriate messages"


// Club Entry System
// Solution #1

// 1. Create variables
// let age = 25;       
// let hasID = true;    
// let isVIP = false;   

// 2. Entry rules: (age >= 21 AND hasID) OR isVIP
// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Allowed to enter the club!");
// } else {
//   console.log("Entry denied. Requirements not met.");
// }

// 3. Test with different combinations:

// Test case 1: age 25, hasID true, isVIP false -> should enter
// age = 25; hasID = true; isVIP = false;
// console.log("\nTest Case 1:");
// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Allowed to enter the club!");
// } else {
//   console.log("Entry denied. Requirements not met.");
// }

// Test case 2: age 19, hasID true, isVIP true -> should enter
// age = 19; hasID = true; isVIP = true;
// console.log("\nTest Case 2:");
// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Allowed to enter the club!");
// } else {
//   console.log("Entry denied. Requirements not met.");
// }

// Test case 3: age 19, hasID false, isVIP false -> should NOT enter
// age = 19; hasID = false; isVIP = false;
// console.log("\nTest Case 3:");
// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Allowed to enter the club!");
// } else {
//   console.log("Entry denied. Requirements not met.");
// }


//////////////////////////////////////

// The Conditional (Ternary) Operator

// const age = 20;

// //basic ternary: condition ? valueifTrue : valueifFalse
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// if else statement
// let drink2
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


// Coding Challenge #4
//Solution #1

//const bill = 275; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%

//const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Step 2: Create beautiful output with template literal
//console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


///////////////////////////
// Coding Challenge #4 
// Solution #2

const bill = 430; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;  

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"
















