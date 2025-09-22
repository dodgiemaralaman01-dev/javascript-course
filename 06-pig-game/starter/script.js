'use strict';

// Hour 1: Game Foundation & Dice Rolling

console.log('=== PIG GAME DEVELOPMENT: FOUNDATION & DICE ROLLING ===');
console.log('Pig Game project ready!');

// Game State Variables
let scores, currentScore, activePlayer, playing;

// Element Selections
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

// Enhanced init Function for Complete Game Reset
const init = function () {
  // Reset Game State
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Reset All Displays
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Hide Dice
  diceEl.classList.add('hidden');

  // Reset Player Styling
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// Updated Roll Dice Functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switchPlayer Function
      switchPlayer();
    }
  }
});

// Hour 2: Player Switching & Hold Functionality

// Create switchPlayer Function
const switchPlayer = function () {
  // Reset current score for the active player
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  // Reset currentScore Variable
  currentScore = 0;

  // Switch to the Other Player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Toggle the Active Class on Both Players
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Select the Hold Button
const btnHold = document.querySelector('.btn--hold');

// Enhanced Hold Functionality with Win Condition and Validation
btnHold.addEventListener('click', function () {
  if (playing && currentScore > 0) {
    // Add Current Score to Active Player's Score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check for Win Condition
    if (scores[activePlayer] >= 100) {
      // Player Wins!
      playing = false;
      diceEl.classList.add('hidden');

      // Winner Styling
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      // Remove Active Class from Winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to Next Player
      switchPlayer();
    }
  }
});

// Test Code
console.log('Scores array:', scores);
console.log('Current score:', currentScore);
console.log('Active player:', activePlayer);

// Test the Visual Indicators
console.log(
  'Player 0 has active class:',
  player0El.classList.contains('player--active')
);
console.log(
  'Player 1 has active class:',
  player1El.classList.contains('player--active')
);

// Test Complete Game State
console.log('Scores:', scores);
console.log('Current Score:', currentScore);
console.log('Active Player:', activePlayer);
console.log('Playing:', playing);
console.log('Player 0 active:', player0El.classList.contains('player--active'));
console.log('Player 1 active:', player1El.classList.contains('player--active'));

// Hour 3: Win Conditions & Game Reset
// Test Code
console.log('Current scores:', scores);
console.log('Win condition met:', scores[activePlayer] >= 100);
console.log('Game playing:', playing);

// Select the New Game Button
const btnNew = document.querySelector('.btn--new');

// New Game Functionality
btnNew.addEventListener('click', init);

// Test Complete Game Reset
console.log('Game reset - scores:', scores);
console.log('Game reset - playing:', playing);
console.log('Game reset - active player:', activePlayer);

// Test Complete Game State
console.log('Scores:', scores);
console.log('Current Score:', currentScore);
console.log('Active Player:', activePlayer);
console.log('Playing:', playing);
console.log('Player 0 winner:', player0El.classList.contains('player--winner'));
console.log('Player 1 winner:', player1El.classList.contains('player--winner'));
console.log('Player 0 active:', player0El.classList.contains('player--active'));
console.log('Player 1 active:', player1El.classList.contains('player--active'));
