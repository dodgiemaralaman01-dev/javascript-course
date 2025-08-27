console.log("Part 2: Functions ready!");

// Functions - Declarations and Expressions
console.log('=== FUNCTIONS ===');

// Function declaration
function logger() {
  console.log('My name is Mar');
}

// Calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor (5, 0));

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);
console.log(juice1);


// Function expressions
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

console.log(calcAge(2004));
console.log(calcAge(1991));


function introduce(firstName, lastName, age) {
    const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
    return introduction;
}

console.log(introduce("Dodgie Mar", "Alaman", "20"));

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} has already retired`;
    }
}

console.log(yearsUntilRetirement(2000, "Mar"));

//global scope
const globalVar = "I am global";

function testScope() {
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
// console.log(localVar);
// console.log(globalVar);

////////////////////////////////////
// Coding Challenge #1 - My Solution

// Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   // A team only wins if it has at least DOUBLE the average of the other
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
//   } else {
//     return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
//   }
// }

// Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas)); 

// Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));


////////////////////////////////////
// Coding Challenge #1

// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  // Your code here
  return (score1 + score2 + score3) / 3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  // Your code here
  // >= 2 * avgKoalas
  // Remember: team needs DOUBLE the score to win
  // Use template literals for nice output
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return `No team wins! Koalas: ${avgKoalas}, Dolphins: ${avgDolphins}`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));
// "No team wins! Dolphins: 46, Koalas: 56"

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
// "Dolphins win (60 vs 28)"



