// Remember, we're gonna use strict mode in all scripts now!
'use strict';

////////////////////////////////////
// Hour 1: Professional Development Environment Setup

console.log('=== DEVELOPMENT ENVIRONMENT SETUP ===');

// Create some messy code - don't worry about formatting yet
const messyExample = function (name, age) {
  if (age >= 18) {
    return 'Hello ' + name + ', you are an adult';
  } else {
    return 'Hello ' + name + ', you are a minor';
  }
};

console.log('Current messy code example:', messyExample('John', 25));
console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');

// Section 1: Essential VS Code Extensions
////////////////////////////////////
// Extension Installation Test

function testExtensions() {
  const extensionTests = [
    { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
    { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
    {
      name: 'Auto Rename Tag',
      status: 'installed',
      purpose: 'HTML efficiency',
    },
  ];

  return extensionTests;
}

const extensionStatus = testExtensions();
console.log('Extension installation status:', extensionStatus);

////////////////////////////////////
// Prettier Configuration Test

// This code has terrible formatting - Prettier will fix it!
const prettierTest = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  skills: ['JavaScript', 'React', 'Node.js'],
  isActive: true,
};

const messyFunction = function (x, y, z) {
  if (x > 0 && y > 0) {
    return x + y + z;
  } else {
    return 0;
  }
};

const messyArrow = items => {
  return items.map(item => {
    return item.toUpperCase();
  });
};

console.log(
  'Before Prettier formatting - this code works but looks unprofessional'
);

// Exercise: Code Formatting Practice

// Create this with terrible formatting:
const studentTest = {
  firstName: 'your-name',
  skills: ['HTML', 'CSS', 'JavaScript'],
  experience: 'beginner',
  goals: ['become-developer', 'build-projects'],
};

const testFunc = function (data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

// Section 3: Live Server Setup and Testing
////////////////////////////////////
// Live Server Testing

// Test 1: Basic live reload
let liveServerTest = 'Updated message - change #2';
console.log('Live Server test:', liveServerTest);

// Test 2: Time-based updates
const timeStamp = new Date().toLocaleTimeString();
const updateCount = 1;

console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// Test 3: Function testing
function demonstrateLiveReload() {
  const randomColor = ['red', 'blue', 'green', 'purple', 'orange'][
    Math.floor(Math.random() * 5)
  ];
  const message = `Live Server rocks! Random color: ${randomColor}`;

  console.log(message);
  return message;
}

demonstrateLiveReload();

// Student Exercise: Add this function and test live reload
function showCurrentTime() {
  const now = new Date().toLocaleTimeString();
  console.log('Current time:', now);
  return now;
}

showCurrentTime();

// Section 4: Custom Code Snippets
////////////////////////////////////
// Code Snippets Testing

// Type 'cl' then press Tab - it should expand to console.log();
console.log('Testing snippet functionality - cl + Tab created this!');

// Type 'func' then press Tab - it should create a function template
function testSnippets() {
  console.log('Function created with snippet - func + Tab!');
  return 'Snippets working perfectly!';
}

testSnippets();

// Type 'arrow' then press Tab - it should create an arrow function template
const snippetTest = message => {
  console.log(`Arrow function from snippet: ${message}`);
  return message;
};

snippetTest('Snippets save so much typing time!');

// Checkpoint: Typing cl + Tab creates console.log();,
// typing func + Tab creates a function template.

// Hour 1 Complete! My Professional Environment
////////////////////////////////////
// Final Verification Code
// Environment Setup Verification

console.log('🎉 Professional Development Environment Complete!');
console.log('✅ Prettier: Automatic code formatting');
console.log('✅ Live Server: Automatic browser refresh');
console.log('✅ Snippets: Fast code generation');
console.log('✅ Extensions: Enhanced productivity');
console.log('Ready for professional JavaScript development!');

// Calculate time savings
function calculateTimeSavings() {
  const dailyConsoleLogs = 50;
  const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
  const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
  const monthlySavings = dailySavings * 22; // work days

  console.log(`Daily keystrokes saved: ${dailySavings}`);
  console.log(`Monthly keystrokes saved: ${monthlySavings}`);

  return { daily: dailySavings, monthly: monthlySavings };
}

calculateTimeSavings();

// Hour 2: Problem-Solving Framework
// Developer Skills Hour 2 - Learning How to Code & Problem-Solving Framework
('use strict');

console.log('=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===');

/*
The Reality of Learning to Code:
- Most people expect: Learn syntax → Become developer
- Actual process: Learn basics → Feel confident → Try real project → 
  Get stuck everywhere → Question everything → Keep pushing → 
  Gradual improvement → Success
- Key insight: Problem-solving matters more than syntax memorization
*/

console.log(
  'Key insight: Professional developers think systematically, not just code'
);

/*
Beginner vs Professional Problem-Solving Approaches:

BEGINNER APPROACH:
1. Jump straight into coding
2. Get stuck immediately  
3. Google random solutions
4. Copy-paste without understanding
5. Get frustrated when nothing works

PROFESSIONAL APPROACH:
1. Understand the problem completely
2. Break into smaller sub-problems
3. Research specific solutions  
4. Implement step by step
5. Test and debug systematically

Today we learn the professional approach!
*/

console.log('Goal: Transform from beginner to professional problem-solver');

// Section 1: The 4-Step Problem-Solving Framework

////////////////////////////////////
// The 4-Step Problem-Solving Framework

/*
STEP 1: UNDERSTAND THE PROBLEM
- Ask the right questions until 100% clear
- Key questions:
  * What exactly needs to be accomplished?
  * What are the inputs and expected outputs?
  * What are the edge cases and constraints?
  * Are there any special requirements?
*/

/*
STEP 2: DIVIDE AND CONQUER  
- Break big problem into small sub-problems
- Strategy:
  * Identify the main components
  * Find dependencies between components
  * Order sub-problems logically
  * Ensure each piece is solvable independently
*/

/*
STEP 3: RESEARCH SOLUTIONS
- Find answers for sub-problems you cannot solve
- Best sources: MDN Documentation, Stack Overflow, Google
- Research tips: Be specific, understand before implementing
*/

/*
STEP 4: IMPLEMENT AND TEST
- Code the solution step by step with testing
- Start simple, test each piece, combine gradually
*/

console.log('4-Step Framework: Understand → Divide → Research → Implement');

// Section 2: Practical Problem-Solving Application
////////////////////////////////////
// PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer

/*
PROBLEM STATEMENT:
Given an array of temperatures from one day, calculate the temperature amplitude. 
Keep in mind that sometimes there might be a sensor error.

Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

STEP 1: UNDERSTANDING THE PROBLEM
- Temperature amplitude = difference between highest and lowest temperature
- Sensor errors = 'error' strings that should be ignored
- Return a number representing amplitude (max - min)

STEP 2: SUB-PROBLEMS
1. How to ignore errors? (Skip non-number values)
2. Find max value in temperature array
3. Find min value in temperature array  
4. Subtract min from max and return result
*/

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Section 3: Extended Challenge Practice
////////////////////////////////////
// EXTENDED PROBLEM: Two Arrays

/*
PROBLEM 2: Function should handle TWO arrays of temperatures

STEP 1: UNDERSTAND - Merge arrays, then apply existing logic
STEP 2: SUB-PROBLEMS - 1) Merge arrays 2) Use existing algorithm  
STEP 3: RESEARCH - array1.concat(array2) method
STEP 4: IMPLEMENT - Combine and reuse existing code
*/

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);

console.log(
  'Problem-solving framework applied successfully to extended challenge!'
);

////////////////////////////////////
// PROBLEM-SOLVING FRAMEWORK MASTERY

/*
FRAMEWORK SUCCESS ANALYSIS:
- ✅ Solved complex problems systematically
- ✅ Broke problems into manageable pieces
- ✅ Applied research when needed
- ✅ Implemented and tested successfully
- ✅ Adapted to changing requirements efficiently
*/

console.log('🎯 Framework mastered - ready for independent problem solving!');

// Quick Quiz:
// 1.) What are the 4 steps of the problem-solving framework?
// Answer: Understand → Divide → Research → Implement

// 2.) Why is it important to understand the problem before coding?
// Answer: Prevents wasted time and ensures you solve the right problem

// 3.) What's the benefit of breaking problems into sub-problems?
// Answer: Small problems are easier to solve and debug

// 4.) When should you research solutions vs. using existing knowledge?
// Answer: Research when you don't know how to solve a sub-problem

// 5.) How do you test each piece of your solution?
// Answer: Test each piece individually before combining them

// Hour 3: Becoming a Self-Sufficient Developer
// Developer Skills Hour 3 - Research Skills & Debugging Fundamentals
('use strict');

console.log('=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===');

/*
Random Googling vs Strategic Research:

RANDOM GOOGLING (Beginner Approach):
- Search only when completely stuck
- Use vague search terms like "javascript array problem"
- Copy-paste first solution found
- Don't understand what the code does
- Same problems happen repeatedly

STRATEGIC RESEARCH (Professional Approach):
- Research proactively to understand concepts
- Use specific, targeted search terms
- Evaluate multiple solutions
- Understand solutions before implementing
- Build knowledge for future problems
*/

console.log(
  'Goal: Master research and debugging like a professional developer'
);
console.log(
  'Strategic research builds lasting knowledge, not just quick fixes'
);

// Section 1: Professional Research Techniques
// Exercise: Finding Maximum Value in Array

////////////////////////////////////
// PROFESSIONAL GOOGLE RESEARCH TECHNIQUES

/*
RESEARCH CHALLENGE: Find Maximum Value in Array
Search progression:
1. "javascript maximum value array"
2. "javascript Math.max array"  
3. "javascript Math.max spread operator array"
4. "Math.max MDN javascript"
*/

function demonstrateArrayMax(numbers) {
  // Method 1 - Using Math.max with spread operator (from research)
  const method1 = Math.max(...numbers);

  // Method 2 - Using for loop (traditional approach)
  let method2 = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > method2) method2 = numbers[i];
  }

  // Method 3 - Using reduce method (functional approach)
  const method3 = numbers.reduce((max, current) =>
    current > max ? current : max
  );

  return { method1, method2, method3 };
}

// Test our research with sample data
const testNumbers = [3, 7, 2, 9, 1, 5];
const maxResults = demonstrateArrayMax(testNumbers);
console.log('Multiple approaches from research:', maxResults);

////////////////////////////////////
// STACK OVERFLOW RESEARCH RESULTS

function reverseStringMethods(str) {
  // Method 1 - Most common Stack Overflow solution
  const method1 = str.split('').reverse().join('');

  // Method 2 - Manual loop approach (educational)
  let method2 = '';
  for (let i = str.length - 1; i >= 0; i--) {
    method2 += str[i];
  }

  // Method 3 - Modern spread operator approach
  const method3 = [...str].reverse().join('');

  return { method1, method2, method3 };
}

// Test our Stack Overflow research results
const reverseResults = reverseStringMethods('hello');
console.log('Stack Overflow research results:', reverseResults);

////////////////////////////////////
// MDN DOCUMENTATION MASTERY

/*
MDN RESEARCH: Array.concat()
- Purpose: Merge two or more arrays
- Syntax: array1.concat(array2, array3, ..., arrayN)
- Returns: New array (doesn't modify originals)
- Key insight: Can concatenate multiple arrays at once!
*/

function demonstrateConcat() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];

  const simple = array1.concat(array2);
  const multiple = array1.concat(array2, array3);

  // Verify concat doesn't modify original arrays
  console.log('Original array1 unchanged:', array1);

  return { simple, multiple };
}

const concatResults = demonstrateConcat();
console.log('MDN documentation applied:', concatResults);

// Section 2: Systematic Debugging Process
// Debugging Practice: Buggy Function
////////////////////////////////////
// SYSTEMATIC DEBUGGING METHODOLOGY

/*
5-STEP DEBUGGING PROCESS:
1. IDENTIFY - Recognize bug exists
2. ISOLATE - Locate where bug happens
3. INVESTIGATE - Understand why bug occurs
4. FIX - Implement correction
5. PREVENT - Add safeguards against similar bugs
*/

// Buggy function for debugging practice
// function calculateAverageScore(scores) {
//   let total; // BUG: Should be initialized to 0

// for (let i = 0; i <= scores.length; i++) {
//   // BUG: Should be < not <=
//   total += scores[i];
// }

//   return total / (scores.length + 1); // BUG: Should be scores.length
// }

// Test the buggy function
// const testScores = [85, 92, 78, 96, 88];
// const buggyResult = calculateAverageScore(testScores);
// console.log('Buggy result:', buggyResult); // Will show NaN or incorrect value

// My Debbuging Solution:
function calculateAverageScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) return NaN;

  let total = 0; // initialize to 0 (fix 1)
  for (let i = 0; i < scores.length; i++) {
    // use < not <= (fix 2)
    total += scores[i];
  }

  return total / scores.length; // divide by scores.length (fix 3)
}

// Test
const testScores = [85, 92, 78, 96, 88];
console.log(calculateAverageScore(testScores)); // 87.8

// Console Debugging Practice
////////////////////////////////////
// BROWSER DEVELOPER TOOLS MASTERY

function demonstrateConsoleDebugging(data) {
  console.group('Debugging Session');

  console.log('Input data:', data);

  if (typeof data !== 'object') {
    console.warn('Warning: Expected object, got', typeof data);
  }

  console.table(data);
  console.groupEnd();

  return Array.isArray(data) ? data.length : Object.keys(data).length;
}

// Test console debugging with different data types
const arrayData = [1, 2, 3, 4, 5];
const objectData = { name: 'John', age: 30, city: 'New York' };

demonstrateConsoleDebugging(arrayData);
demonstrateConsoleDebugging(objectData);

// Debugger Statement Practice
////////////////////////////////////
// DEBUGGER STATEMENT AND BREAKPOINTS

function stepThroughDebugging(numbers) {
  debugger; // This will pause execution in browser dev tools

  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    console.log(`Processing index ${i}: value = ${currentNumber}`);

    if (typeof currentNumber === 'number') {
      sum += currentNumber;
      count++;
    } else {
      console.error(`Invalid number at index ${i}:`, currentNumber);
    }
  }

  const average = count > 0 ? sum / count : 0;
  console.log('Final results:', { sum, count, average });

  return average;
}

// Test debugging function - open dev tools to see debugger in action
const mixedNumbers = [10, 20, 'error', 30, null, 40];
const debugResult = stepThroughDebugging(mixedNumbers);
console.log('Debug session result:', debugResult);

// Section 3: Complete Bug Fixing Application
// Systematic Bug Fixing

////////////////////////////////////
// SYSTEMATIC BUG FIXING APPLICATION

/*
DEBUGGING PROCESS APPLICATION:

STEP 1: IDENTIFY ✅
- Bug: calculateAverageScore returns NaN or wrong value
- Expected: Average of [85, 92, 78, 96, 88] should be 87.8
- Actual: Getting NaN or incorrect value

STEP 2: ISOLATE ✅
- Bug location: Inside calculateAverageScore function
- Specific issues: initialization, loop condition, division

STEP 3: INVESTIGATE ✅
- total starts as undefined (undefined + number = NaN)
- Loop goes one iteration too far (accesses undefined)
- Division uses wrong denominator

STEP 4: FIX ✅
- Initialize total to 0
- Change <= to < in loop condition
- Remove + 1 from division

STEP 5: PREVENT ✅
- Add input validation
- Add type checking for array elements
*/

function calculateAverageScoreFixed(scores) {
  // STEP 5 - PREVENT: Add input validation
  if (!Array.isArray(scores) || scores.length === 0) {
    console.error('Invalid input: scores must be a non-empty array');
    return 0;
  }

  // STEP 4 - FIX: Proper initialization
  let total = 0; // FIXED: Initialize to 0, not undefined

  // STEP 4 - FIX: Correct loop condition
  for (let i = 0; i < scores.length; i++) {
    // FIXED: < instead of <=
    // STEP 5 - PREVENT: Add type checking
    if (typeof scores[i] === 'number') {
      total += scores[i];
    } else {
      console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
    }
  }

  // STEP 4 - FIX: Correct division
  return total / scores.length; // FIXED: Remove + 1
}

// Test the fixed function
const fixedResult = calculateAverageScoreFixed(testScores);
console.log('Fixed result:', fixedResult); // Should show correct average: 87.8

// My Debugging Solution:

// function calculateAverageScoreFixed(scores) {
//   if (!Array.isArray(scores)) throw new TypeError("scores must be an array");

//   let total = 0;
//   let count = 0;

//   for (let i = 0; i < scores.length; i++) {
//     const v = scores[i];
//     if (typeof v === "number" && Number.isFinite(v)) {
//       total += v;
//       count++;
//     } else {
//       console.warn(`Skipping non-number value at index ${i}:`, v);
//     }
//   }

//   // return NaN if there were no valid numbers (safer than returning 0 silently)
//   return count > 0 ? total / count : NaN;
// }

// // Tests
// const testScores = [85, 92, 78, 96, 88];
// console.log(calculateAverageScoreFixed(testScores)); // 87.8

// console.log(calculateAverageScoreFixed([85, 92, "bad", 88])); // (85+92+88)/3 = 88.333...

// Comprehensive Testing
// Comprehensive debugging verification
console.group('Debugging Verification Tests');

// Test 1 - Normal case
const normalScores = [85, 92, 78, 96, 88];
const normalResult = calculateAverageScoreFixed(normalScores);
console.log('Normal case result:', normalResult);

// Test 2 - Edge case with invalid data
const mixedScores = [85, 'invalid', 92, null, 78];
const mixedResult = calculateAverageScoreFixed(mixedScores);
console.log('Mixed data result:', mixedResult);

// Test 3 - Error case with invalid input
const errorResult = calculateAverageScoreFixed('not an array');
console.log('Error case result:', errorResult);

// Test 4 - Edge case with empty array
const emptyResult = calculateAverageScoreFixed([]);
console.log('Empty array result:', emptyResult);

console.groupEnd();

console.log('Systematic debugging process successfully applied!');
console.log(
  'All bugs identified, isolated, investigated, fixed, and prevented'
);

// My Debugging Solution:

// function calculateAverageScoreFixed(scores) {
//   if (!Array.isArray(scores)) throw new TypeError("scores must be an array");

//   let total = 0;
//   let count = 0;

//   for (let i = 0; i < scores.length; i++) {
//     const v = scores[i];
//     if (typeof v === "number" && Number.isFinite(v)) {
//       total += v;
//       count++;
//     } else {
//       console.warn(`Skipping non-number value at index ${i}:`, v);
//     }
//   }

//   return count > 0 ? total / count : NaN;
// }

// Success Checklist for Hour 3

// Research Skills:
// [/] Can formulate specific search queries for programming problems
// [/ ] Evaluate quality of Stack Overflow answers effectively
// [/] Navigate MDN documentation to find and understand solutions
// [/] Research proactively instead of only when stuck

// Debugging Skills:
// [/] Apply the 5-step debugging process systematically
// [/] Use console methods effectively for code investigation
// [/] Identify and fix bugs in unfamiliar code
// [/] Implement prevention strategies in solutions

// Professional Independence:
// [/] Confident in finding solutions to new problems
// [/] Systematic approach to error investigation
// [/] Self-sufficient in debugging and research
// [/] Ready for real-world development challenges

// Check Your Understanding
// [/] Use Google effectively with specific search terms
// [/] Evaluate Stack Overflow answers for quality and relevance
// [/] Navigate MDN documentation to find solutions
// [/] Apply the 5-step debugging methodology systematically
// [/] Use browser developer tools and console methods effectively

// Quick Quiz:
// 1.) What are the 5 steps of the debugging process?
// Answer: Identify → Isolate → Investigate → Fix → Prevent

// 2.) How do you find high-quality answers on Stack Overflow?
// Answer: Look for high votes, accepted answers, recent dates, and explanations

// 3.) What's the best way to search for JavaScript solutions on Google?
// Answer: Use specific keywords, include "javascript", and add site-specific searches

// 4.) How do you use the debugger statement in browser dev tools?
// Add debugger; in code, open dev tools, and use step buttons

// 5.) What's the difference between console.log and console.error?
// console.log shows general output; console.error shows errors in red

// Hour 4: Advanced Challenges

// Opening Setup
// Developer Skills Hour 4 - Advanced Problem-Solving & Real-World Challenges
('use strict');

console.log('=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===');

/*
Your Developer Transformation Today:
Hour 1: Professional tools and environment ✅
Hour 2: Problem-solving framework and mindset ✅  
Hour 3: Research and debugging mastery ✅
Hour 4: Apply everything to real challenges

You're now solving unfamiliar problems independently.
*/

console.log('Ready to tackle complex problems using systematic approaches');
console.log('Challenge: Build solutions that work under pressure');

// Section 1: Weather Forecast Challenge

// Problem Statement:
// Given an array of forecasted maximum temperatures, create a function that
// displays a formatted string with these temperatures.

// EXAMPLE:
// Input: [17, 21, 23]
// Output: "...17°C in 1 days...21°C in 2 days...23°C in 3 days..."

// REQUIREMENTS:
// - Function name: printForecast(arr)
// - Log formatted string to console
// - Handle arrays of any length
// - Day numbering starts at 1 (not 0)
// - Include temperature symbol and proper formatting

// TEST DATA:
// - Test 1: [17, 21, 23]
// - Test 2: [12, 5, -5, 0, 4]

// My Solutions:

// STEP 1 — UNDERSTAND
// - Input: array of numbers (temperatures).
// - Output: one string logged to console in this pattern:
// ...<temp>°C in <day> days...<temp>°C in <day> days...
// - Day numbering = index + 1.
// - Should handle any array length, empty arrays, and bad inputs sensibly.

// STEP 2 — DIVIDE
// Subproblems:
// 1.) Validate input (is array).
// 2.) Map each value → formatted piece (<temp>°C in <n> days).
// 3.) Join pieces with the "..." separator and add "..." to start and end.
// 4.) Log to console.

// STEP 3 — PLAN (brief)
// - Use Array.prototype.map to turn each entry into a formatted string.
// - Use Array.prototype.join('...') then prefix & suffix "...".
// - For robustness: handle empty array and non-array input.

// STEP 4 — CODE (implementation + tests)

// Version A — matches the example (always uses "days")
// function printForecast(arr) {
//   if (!Array.isArray(arr)) {
//     console.error("printForecast error: input must be an array");
//     return;
//   }
//   if (arr.length === 0) {
//     console.log("...No forecast data...");
//     return;
//   }

//   const body = arr.map((temp, i) => `${temp}°C in ${i + 1} days`).join('...');
//   console.log('...' + body + '...');
// }

// Tests
// printForecast([17, 21, 23]);
// Expected: ...17°C in 1 days...21°C in 2 days...23°C in 3 days...

// printForecast([12, 5, -5, 0, 4]);
// Expected: ...12°C in 1 days...5°C in 2 days...-5°C in 3 days...0°C in 4 days...4°C in 5 days...

// Version B — small enhancement (correct singular/plural: day when 1)
// function printForecastNice(arr) {
//   if (!Array.isArray(arr)) {
//     console.error("printForecastNice error: input must be an array");
//     return;
//   }
//   if (arr.length === 0) {
//     console.log("...No forecast data...");
//     return;
//   }

//   const body = arr
//     .map((temp, i) => {
//       const day = i + 1;
//       const label = day === 1 ? 'day' : 'days';
//       return `${temp}°C in ${day} ${label}`;
//     })
//     .join('...');
//   console.log('...' + body + '...');
// }

// Same tests
// printForecastNice([17, 21, 23]);
// Expected: ...17°C in 1 day...21°C in 2 days...23°C in 3 days...

// Implementation According to the Document
////////////////////////////////////
// MAIN CHALLENGE: Weather Forecast String Builder

/*
WEATHER FORECAST CHALLENGE:
Apply 4-step framework systematically:
1. UNDERSTAND: Transform array to formatted string with day numbering
2. DIVIDE: String building + formatting + day calculation + separators
3. RESEARCH: String concatenation and template literals
4. IMPLEMENT: Step-by-step solution building
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  // Start with empty string accumulator - same pattern as sum calculations
  let str = '';

  // Loop through array to build the formatted string
  for (let i = 0; i < arr.length; i++) {
    // Build each piece using template literals for clean formatting
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  // Add starting dots and log the final result
  console.log('...' + str);
}

// Test with provided data
printForecast(data1);
printForecast(data2);

console.log('Weather forecast formatter working correctly!');

// Alternative Approaches According to the Document
////////////////////////////////////
// ALTERNATIVE IMPLEMENTATIONS

// Alternative 1 - Using array methods instead of loops
function printForecastMap(arr) {
  const formatted = arr.map((temp, index) => `${temp}°C in ${index + 1} days`);
  console.log('...' + formatted.join(' ... ') + ' ...');
}

// Alternative 2 - Single line approach using reduce
function printForecastReduce(arr) {
  const result = arr.reduce(
    (acc, temp, index) => acc + `${temp}°C in ${index + 1} days ... `,
    '...'
  );
  console.log(result);
}

// Test alternative approaches
console.log('Testing alternative implementations:');
printForecastMap(data1);
printForecastReduce(data1);

// Which approach do you prefer and why?

// Loop approach: Most readable for beginners
// Map approach: Functional programming style
// Reduce approach: Most concise but harder to read

// My Answer:
// I prefer the `map` + `join` approach because it reads declaratively,
// you clearly express the transformation of each temperature into a formatted piece
// and then join those pieces, making the intent obvious to future readers and easy to test;
// it also handles separators cleanly so you avoid accidental extra characters.
// For typical input sizes its performance is comparable to a loop,
// and it composes well with other array operations (like `filter` or `slice`) without changing the core logic.
// A plain `for` loop can be better when teaching iteration or when you need fine-grained control, while `reduce` is useful for complex single-pass aggregations but is usually less readable for simple string formatting.

// Section 2: Time-Pressured Challenge
// Job Interview Simulation
// The Challenge:
// SCENARIO: You're building a time tracking app for freelancers.

// PROBLEM:
// Create a function that analyzes a week of work hours and returns:
// 1. Total hours worked
// 2. Average daily hours
// 3. The day with most hours worked
// 4. Number of days worked (non-zero hours)
// 5. Whether it was a full-time week (35+ hours)

// INPUT: Array of 7 numbers representing daily hours
// EXAMPLE: [7.5, 8, 6.5, 0, 8.5, 4, 0]

// FUNCTION NAME: analyzeWorkWeek(dailyHours)
// RETURN: Object with all calculated values

// TIME LIMIT: 10 minutes - START NOW!

// Exercise: Work Hours Analyzer

// My Solution:

// 1.) Understand: input = array of 7 daily hours → compute 5 metrics.
// 2.) Divide: total, average, max-day, non-zero count, full-time check.
// 3.) Research/Decide: return an object; day names Mon–Sun; on ties pick first occurrence.
// 4.) Implement & test.

// Implementation
// function analyzeWorkWeek(dailyHours) {
//   // Basic validation
//   if (!Array.isArray(dailyHours)) {
//     throw new TypeError('dailyHours must be an array');
//   }
//   if (dailyHours.length !== 7) {
//     console.warn(
//       'Expected 7 entries (Mon-Sun). Function will still compute using provided length.'
//     );
//   }

//   const dayNames = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
//   ];
//   const len = dailyHours.length;

// Normalize & validate numeric entries (coerce only if safe)
// const hours = dailyHours.map((h, i) => {
//   if (typeof h !== 'number' || !Number.isFinite(h)) {
//     console.warn(
//       `Invalid number at index ${i} (${dayNames[i] ?? i}); treating as 0.`
//     );
//     return 0;
//   }
//   return h;
// });

// 1) Total hours worked
// const totalHours = hours.reduce((acc, v) => acc + v, 0);

// 2) Average daily hours (divide by full week length = len)
// const averageDailyHours = len > 0 ? totalHours / len : 0;

// 3) Day with most hours (first max if tie)
// let maxIndex = 0;
// for (let i = 1; i < hours.length; i++) {
//   if (hours[i] > hours[maxIndex]) maxIndex = i;
// }
// const dayWithMostHours = {
//   index: maxIndex,
//   name: dayNames[maxIndex] ?? `Day ${maxIndex + 1}`,
//   hours: hours[maxIndex],
// };

// 4) Number of days worked (non-zero hours)
// const daysWorked = hours.reduce((acc, v) => acc + (v > 0 ? 1 : 0), 0);

// 5) Full-time week? (35+ hours)
// const isFullTimeWeek = totalHours >= 35;

//   return {
//     totalHours,
//     averageDailyHours,
//     dayWithMostHours,
//     daysWorked,
//     isFullTimeWeek,
//   };
// }

// Test with the example
// Input: [7.5, 8, 6.5, 0, 8.5, 4, 0]
// const example = [7.5, 8, 6.5, 0, 8.5, 4, 0];
// const report = analyzeWorkWeek(example);
// console.log(report);

/* Output object:
{
  totalHours: 34.5,                         // 7.5 + 8 + 6.5 + 0 + 8.5 + 4 + 0 = 34.5
  averageDailyHours: 34.5 / 7 ≈ 4.9285714286,
  dayWithMostHours: { index: 4, name: "Friday", hours: 8.5 }, // first max at index 4
  daysWorked: 5,                             // non-zero days: 7.5,8,6.5,8.5,4
  isFullTimeWeek: false                      // 34.5 < 35
}
*/

////////////////////////////////////
// TIME-PRESSURED CHALLENGE: Work Hours Analyzer Based on the Document

/*
JOB INTERVIEW SIMULATION:
10-minute challenge to analyze freelancer work week
Stay systematic even under pressure!
*/

function analyzeWorkWeek(dailyHours) {
  // Calculate total hours using reduce
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  // Calculate average with proper rounding
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  // Find maximum hours and corresponding day
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const maxDay = days[maxDayIndex];

  // Count days worked using filter
  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  // Check if full-time week
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

// Test the solution
const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log('Work week analysis:', analysis);

console.log('Challenge completed under time pressure!');

// Optimized Version According to the Document
// Optimized version with error handling
function analyzeWorkWeekOptimized(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    console.error('Invalid input: Expected array of 7 daily hours');
    return null;
  }

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = Math.round((totalHours / 7) * 10) / 10;
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return {
    totalHours,
    averageHours,
    maxDay: dayNames[maxDayIndex],
    daysWorked,
    isFullTime: totalHours >= 35,
    workingDays: dailyHours
      .map((hours, index) => (hours > 0 ? dayNames[index] : null))
      .filter(day => day !== null),
  };
}

const optimizedAnalysis = analyzeWorkWeekOptimized(weeklyHours);
console.log('Optimized analysis:', optimizedAnalysis);

// Section 3: Debug Legacy Code
// Final Integration Challenge

// The Buggy Code
////////////////////////////////////
// FINAL INTEGRATION: Debug and Enhance Legacy Code

// Here's the buggy legacy code you need to fix
function legacyForecastFunction(temperatures) {
  // Multiple bugs hidden in this code!
  var result = '';
  for (var i = 1; i <= temperatures.length; i++) {
    result = result + temperatures[i] + ' degrees in day ' + i + ', ';
  }
  return result;
}

// Test the buggy function to see what goes wrong
const testData = [15, 18, 22, 19];
console.log('Buggy function output:', legacyForecastFunction(testData));

// My Solution:
// Fixing & enhancing the legacy forecast function (5-step applied)
// Short answer: I fixed the bugs, modernized the code, added input validation,
// nicer formatting (°C + singular/plural day), and warnings for bad data.
// Example output shown below.

// 5-step debugging summary
// 1.) IDENTIFY — Symptom: output contains undefined and wrong formatting.
// 2.) ISOLATE — Problem area: the for loop and string building inside legacyForecastFunction.
// 3.) INVESTIGATE — Root causes: loop started at 1 and used <=, indexing temperatures[i] read past end and skipped the 0th element; var used; no validation; poor formatting.
// 4.) FIX — Correct loop bounds (i = 0; i < length), use let/const, validate inputs, handle non-number entries, and produce clear formatted string.
// 5.) PREVENT — Add input checks, use Number.isFinite, add warnings, suggest linter/TypeScript/tests.

// My Fixed & enhanced implementation
// Fixed + enhanced version of the legacy function
// function legacyForecastFunctionFixed(temperatures) {
//   // Input validation
//   if (!Array.isArray(temperatures)) {
//     console.error("legacyForecastFunctionFixed: expected an array of numbers");
//     return "...Invalid input...";
//   }

//   const pieces = [];

//   for (let i = 0; i < temperatures.length; i++) {
//     const value = temperatures[i];

//     // Skip non-numeric values (with a warning)
//     if (typeof value !== "number" || !Number.isFinite(value)) {
//       console.warn(`Skipping invalid temperature at index ${i}:`, value);
//       continue;
//     }

//     const day = i + 1;
//     const dayLabel = day === 1 ? "day" : "days";
//     pieces.push(`${value}°C in ${day} ${dayLabel}`);
//   }

//   if (pieces.length === 0) {
//     return "...No valid temperature data...";
//   }

// Join with leading and trailing "..." to match the requested style
//   return "..." + pieces.join("...") + "...";
// }

// Tests and example outputs
// const testData = [15, 18, 22, 19];
// console.log("Fixed output:", legacyForecastFunctionFixed(testData));
// Fixed output: ...15°C in 1 day...18°C in 2 days...22°C in 3 days...19°C in 4 days...

// Test with some invalid values
// const mixed = [15, null, "hot", 21];
// console.log("Mixed output:", legacyForecastFunctionFixed(mixed));
// Console warnings:
// Skipping invalid temperature at index 1: null
// Skipping invalid temperature at index 2: "hot"
// Mixed output: ...15°C in 1 day...21°C in 4 days...

// Test with totally invalid input
// console.log(legacyForecastFunctionFixed("not-an-array"));
// Console error: legacyForecastFunctionFixed: expected an array of numbers
// Output: ...Invalid input...

// Fixed and Enhanced Version According to the Document
////////////////////////////////////
// SYSTEMATIC DEBUGGING AND ENHANCEMENT

// Completely fixed and enhanced version according to the document
function enhancedForecastFunction(temperatures, options = {}) {
  // Step 5 - PREVENT: Add comprehensive input validation
  if (!Array.isArray(temperatures) || temperatures.length === 0) {
    console.error('Invalid input: temperatures must be a non-empty array');
    return '';
  }

  // Step 4 - FIX: Use modern JavaScript with proper declarations
  const { unit = '°C', separator = '...', includeIndex = true } = options;

  // Step 4 - FIX: Correct loop bounds and string building
  let result = '';

  for (let i = 0; i < temperatures.length; i++) {
    const dayNumber = includeIndex ? i + 1 : i;
    result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
  }

  // Step 5 - PREVENT: Return clean result without trailing separator
  return separator + result.slice(0, -separator.length);
}

// Test the enhanced function with multiple configurations
console.log('Enhanced function (default):', enhancedForecastFunction(testData));
console.log(
  'Enhanced function (custom):',
  enhancedForecastFunction(testData, {
    unit: '°F',
    separator: ' | ',
    includeIndex: true,
  })
);

console.log('🎯 Complete developer skills successfully applied!');
console.log('Legacy code debugged, fixed, and enhanced systematically');

// Final Success Checklist
// Problem-Solving Mastery:
// - [/] Apply 4-step framework automatically to new problems
// - [/] Break complex challenges into manageable sub-problems
// - [/] Research effectively when knowledge gaps exist
// - [/] Implement working solutions systematically

// Professional Readiness:
// - [/] Handle time pressure while maintaining systematic approach
// - [/] Debug unfamiliar code using 5-step methodology
// - [/] Consider multiple solution approaches and trade-offs
// - [/] Demonstrate confidence in tackling new challenges

// Complete Developer Toolkit:
// - [/] Professional environment with automated tools
// - [/] Systematic problem-solving framework
// - [/] Research skills for self-sufficiency
// - [/] Debugging expertise for error resolution

// Check Your Understanding
// - [/] Apply the 4-step problem-solving framework to complex challenges
// - [/] Handle time-pressured coding exercises systematically
// - [/] Debug and enhance legacy code using professional methodology
// - [/] Consider multiple solution approaches and evaluate trade-offs
// - [/] Demonstrate confidence in tackling unfamiliar programming problems

// Quick Quiz:
// 1.) How do you stay systematic when solving problems under time pressure?
// Apply the 4-step framework even under pressure - it prevents
// panic and ensures systematic thinking

// 2.) What's the benefit of considering multiple solution approaches?
// Different approaches have different trade-offs
// (readability vs performance, simplicity vs features)

// 3.) How do you debug code you didn't write originally?
// Use the 5-step debugging methodology: Identify →
// Isolate → Investigate → Fix → Prevent

// 4.) What makes a solution "professional quality"?
// Clean code, proper error handling, good documentation,
// and systematic approach

// 5.) How do you build confidence in handling new programming challenges?
// Practice with increasingly complex challenges
// and trust your systematic problem-solving process
