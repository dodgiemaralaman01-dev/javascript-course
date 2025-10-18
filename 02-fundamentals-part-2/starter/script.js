// console.log("Part 2: Functions ready!");

// Functions - Declarations and Expressions
// console.log('=== FUNCTIONS ===');

// Function declaration
// function logger() {
//   console.log('My name is Mar');
// }

// Calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor (5, 0));

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);
// console.log(juice1);

// Function expressions
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// console.log(calcAge(2004));
// console.log(calcAge(1991));

// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
//     return introduction;
// }

// console.log(introduce("Dodgie Mar", "Alaman", "20"));

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         return `${firstName} has already retired`;
//     }
// }

// console.log(yearsUntilRetirement(2000, "Mar"));

//global scope
// const globalVar = "I am global";

// function testScope() {
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
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

// Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
// Your code here
//   return (score1 + score2 + score3) / 3;
// }

// Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
// Your code here
// >= 2 * avgKoalas
// Remember: team needs DOUBLE the score to win
// Use template literals for nice output
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//   } else {
//     return `No team wins! Koalas: ${avgKoalas}, Dolphins: ${avgDolphins}`;
//   }
// }

// Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));
// "No team wins! Dolphins: 46, Koalas: 56"

// Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));
// "Dolphins win (60 vs 28)"

// Lesson 2 Array Data Manipulations

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// Arrays - Creation and Access
// console.log("=== ARRAYS ===");

// Array creation
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// Different data types in same array
// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// Alternative way (but literal notation is preferred)
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// Array indexing starts at 0
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[1] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991];
// console.log(jonas);

// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// const ages = [calcAge(2002), calcAge(2003), calcAge(2005)];
// console.log(ages);

// Array Methods - Adding Elements

// const newLength = friends.push("Steven");
// console.log(friends);
// console.log(newLength);
// const newLength2 = friends.push("John");
// console.log(friends);

// friends.unshift("Maria");
// console.log(friends);

// const popped = friends.pop();
// const popped2 = friends.pop();
// console.log(popped);
// console.log(popped2);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf("Micheal"));
// console.log(friends.indexOf("Maria"));
// console.log(friends.indexOf("Jay"));

// console.log(friends.includes("Jay"));
// console.log(friends.includes("Maria"));

// Array Iteration - Loops

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// // forEach method - modern approach
// friends.forEach(function (friend, index) {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// // Arrow function version (even cleaner)
// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//   total += grades2[i];
// }
// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades2.length} students passed`);

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
// function calculateAverage(grades) {
// Your code here
// Hint: Sum all grades, divide by length
//   let total = 0;
//   for (let i = 0; i < grades.length; i++) {
//     total += grades[i];
//   }
//   return total / grades.length;
// }

// Function to find highest grade
// function findHighestGrade(grades) {
// Your code here
// Hint: Start with first grade, compare with each subsequent grade
//   let highest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }

// Function to find lowest grade
// function findLowestGrade(grades) {
// Your code here
// Hint: Similar to highest, but use < comparison
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// Function to count passing students
// function countPassing(grades, passingGrade) {
// Your code here
// Hint: Counter pattern - increment when condition is met
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }

// Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

//////////////////////////////////
// Hour 3

// Problem with Arrays
// const marArray = [
//   "Mar",
//   "Alaman",
//   2025 - 2004,
//   "Student",
//   ["X.Borg", "Cici", "Lapu Lapu"],
// ];

// console.log(marArray[0]);
// console.log(marArray[1]);

// const marObject = {
//   firstName: "Mar",
//   lastName: "Alaman",
//   age: 2025 - 2004,
//   job: "Student",
//   friends: ["X.Borg", "Cici", "Lapu Lapu"],
// };
// console.log(marObject);

// Property access methods
// Dot notation
// console.log(marObject.firstName);
// console.log(marObject.lastName);
// console.log(marObject.age);

// Bracket notation
// console.log(marObject["firstName"]);
// console.log(marObject["lastName"]);
// console.log(marObject["age"]);

// const nameKey = "Name";
// console.log(marObject['first' + nameKey]);

// Modifying existing properties
// marObject.job = "Mobile and Web Developer";
// marObject["age"] = 30;
// console.log(marObject);

// add new properties
// marObject.location = "Philippines";
// marObject["twitter"] = "@marshwwwwmallow";
// marObject.hasDriversLicense = true;
// console.log(marObject);

// When to use dot vs bracket notation
// const property = "job";
// console.log(marObject[property]);

// "1.) Property name is in a variable"
// "2.) Property name has spaces or special characters"
// "3.) Property name is computed/dynamic"
// "Otherwise, prefer dot notation"

// Objects vs Arrays Decision Making

// Arrays
// const listOfYears = [2000, 2001, 2002, 2003];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// Objects
// const person= {
//   name: "Mar",
//   age: 20,
//   occupation: "student",
// };
// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "black",
// };

// objects can contain arrays, arrays can contain objects
// const student = {
//   name: "Mar",
//   grades: [99, 99, 99, 99],
//   address: {
//     street: "Reten St",
//     city: "Manila",
//   },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// Object Methods
// const mar = {
//   firstName: "Mar",
//   lastName: "Alaman",
//   birthYear: 2004,
//   job: "mobile and web developer",
//   friends: ["X.Borg", "Cici", "Lapu Lapu"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2025 - birthYear;
//   },
// };

// console.log(mar.calcAge(2004));

//'this' keyword
// const marImproved = {
//   firstName: "Mar",
//   lastName: "Alaman",
//   birthYear: 2004,
//   job: "mobile and web developer",
//   friends: ["X.Borg", "Cici", "Lapu Lapu"],
//   hasDriversLicense: false,

//   calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge() }-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(marImproved.calcAge());
// console.log(marImproved.age);
// console.log(marImproved.getSummary());

// Complex object with multiple methods (show real-world pattern - 5 min)
// const bankAccount = {
//   owner: "Mar Alaman",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 1000000],
//   interestRate: 1.2,
//   pin: 9999,

// Method to calculate balance
// calcBalance: function () {
//   this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
//   return this.balance;
// },

// Method to add a movement
// deposit: function (amount) {
//   this.movements.push(amount);
//   this.calcBalance();
// },

//   withdraw: function (amount) {
//     this.movements.push(-amount);
//     this.calcBalance();
//   },

//   // Method for account summary
//   getStatement: function () {
//   return `${this.owner}'s account balance: ${this.calcBalance()}`;
//   },
// };

// console.log(bankAccount.getStatement());
// bankAccount.deposit(500);
// console.log(bankAccount.getStatement());

////////////////////////////////////
// Coding Challenge #3 - User Profile System
// My First Solution

// const user = {
//   firstName: "Mar",
//   lastName: "Alaman",
//   birthYear: 2004,
//   location: "Philippines",
//   interests: ["coding", "Mobile Legends", "basketball"],
//   friends: [
//     { name: "X.Borg", status: "active" },
//     { name: "Cici", status: "inactive" },
//     { name: "Lapu Lapu", status: "active" },
//   ],
//   isActive: true,

// Calculate age method
// calcAge: function () {
// Calculate age and store as this.age
// Hint: Use new Date().getFullYear() for current year
// Your code here
//   const currentYear = new Date().getFullYear();
//   this.age = currentYear - this.birthYear;
//   return this.age;
// },

// Add friend method
// addFriend: function (name, status = "active") {
// Add new friend object to this.friends array
// Return the new length of friends array
// Your code here
//   this.friends.push({ name, status });
//   return this.friends.length;
// },

// Get active friends count
// getActiveFriends: function () {
// Filter friends array to count only active friends
// Hint: use this.friends.filter()
// Your code here
//   return this.friends.filter((f) => f.status === "active").length;
// },

// Toggle active status
// toggleStatus: function () {
// Switch this.isActive between true and false
// Return the new status
// Your code here
//   this.isActive = !this.isActive;
//   return this.isActive;
// },

// Generate profile summary
//   getSummary: function () {
// Create a social media style profile summary
// Include: name, age, location, status, friend counts, interests
// Use template literals for nice formatting
// Your code here
//     const age = this.calcAge();
//     const totalFriends = this.friends.length;
//     const activeFriends = this.getActiveFriends();
//     const interestsList = this.interests.join(", ");
//     const statusText = this.isActive ? "active" : "inactive";
//     const friendNames = this.friends.map((f) => f.name).join(", ");

//     return `${this.firstName} ${this.lastName} — ${age} years old from ${this.location}.
// Status: ${statusText}.
// Interests: ${interestsList}.
// Friends (${totalFriends} total, ${activeFriends} active): ${friendNames}.`;
//   },
// };

// Test your user profile system
// console.log(user.getSummary());
// user.addFriend("Guinivere", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

////////////////////////////////////
// Coding Challenge #3 - User Profile System
// My Second Solution

// const user = {
//   firstName: "Mar",
//   lastName: "Alaman",
//   birthYear: 2004,
//   location: "Philippines",
//   interests: ["coding", "Mobile Legends", "basketball"],
//   friends: [
//     { name: "X.Borg", status: "active" },
//     { name: "Cici", status: "inactive" },
//     { name: "Lapu Lapu", status: "active" },
//   ],
//   isActive: true,

// Calculate age method
// calcAge: function () {
// Calculate age and store as this.age
// Hint: Use new Date().getFullYear() for current year
// Your code here
//   this.age = new Date().getFullYear() - this.birthYear;
//   return this.age;
// },

// Add friend method
// addFriend: function (name, status = "active") {
// Add new friend object to this.friends array
// Return the new length of friends array
// Your code here
//   this.friends.push({ name, status });
//   return this.friends.length;
// },

// Get active friends count
// getActiveFriends: function () {
// Filter friends array to count only active friends
// Hint: use this.friends.filter()
// Your code here
//   return this.friends.filter(friend => friend.status === "active").length;
// },

// Toggle active status
// toggleStatus: function () {
// Switch this.isActive between true and false
// Return the new status
// Your code here
//   this.isActive = !this.isActive;
//   return this.isActive;
// },

// Generate profile summary
// getSummary: function () {
// Create a social media style profile summary
// Include: name, age, location, status, friend counts, interests
// Use template literals for nice formatting
// Your code here
//     const age = this.calcAge();
//     const activeFriends = this.getActiveFriends();
//     const status = this.isActive ? "active" : "away";

//     return `${this.firstName} ${this.lastName} (${age}) from ${this.location}
//     Currently: ${status}.
//     ${activeFriends} active friends out of ${this.friends.length} total
//     Interests: ${this.interests.join(", ")}.
//     Connected and sharing life's adventures.`;
//   },
// };

// Test
// console.log(user.getSummary());
// user.addFriend("Guinivere", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

// Select DOM Elements

// 1st method
// querySelector - uses css selectors

// const message = document.querySelector(".message");
// gets us the entire element object with all its properties
// console.log(message);

// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);
//  query selector returns the first matching element

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// getElementById
// const buttonByID = document.getElementById("btn");
// console.log(buttonByID);
// console.log(buttonByID === button);

// querySelectorAll - Multiple elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);

// Modifying element content
const message = document.querySelector('.message');

// Text content
console.log(message.textContent);
message.textContent = 'Hello from JavaScript!';
console.log(message.textContent);

// innerHTML
message.innerHTML = '<strong>Bold text from JS!</strong>';

// innerText
console.log(message.innerText);

// Input Element Value
const input = document.querySelector('.guess');

console.log(input.value);
input.value = 'Default text';

const heading = document.querySelector('h1');

heading.style.color = 'red';
heading.style.backgroundColor = 'yellow';
heading.style.fontSize = '3rem';

const button = document.querySelector('#btn');
button.style.padding = '20px';
button.style.borderRadius = '10px';

// Event Listeners - user interactions
button.addEventListener('click', function () {
  console.log('Button was clicked!');
  message.textContent = 'You clicked the button';
  message.style.color = 'green';
});

let clickCount = 0;
button.addEventListener('click', function () {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

// Input events
const display = document.querySelector('.message');
input.addEventListener('input', function () {
  const userText = input.value;
  display.textContent = `You typed ${userText}`;
  display.style.fontSize = `${userText.length + 10}px`;
});

// keyboard events - respond to specific key
input.addEventListener('keydown', function (event) {
  console.log(`Key pressed ${event.key}`);

  if (event.key === 'Enter') {
    display.textContent = `You pressed Enter! Text was ${input.value}`;
    input.value = ''; // clear input
  }
});
