'use strict';

// Hour 1: Game Foundation & Dice Rolling

console.log('=== PIG GAME DEVELOPMENT: FOUNDATION & DICE ROLLING ===');
console.log('Pig Game project ready!');

// Game state variables
let scores, currentScore, activePlayer, playing;

// Element selections
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

// Initialize game
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
};
init();

// Updated roll dice functionality
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
      // Use our new switchPlayer function
      switchPlayer();
    }
  }
});

// Hour 2: Player Switching & Hold Functionality

// Create switchPlayer function
const switchPlayer = function () {
  // Reset current score for the active player
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  // Reset currentScore variable
  currentScore = 0;

  // Switch to the other player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Toggle the active class on both players
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Select the hold button
const btnHold = document.querySelector('.btn--hold');

// Enhanced hold functionality with proper validation
btnHold.addEventListener('click', function () {
  if (playing && currentScore > 0) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Switch to next player
    switchPlayer();
  }
});

// Test Code
console.log('Scores array:', scores);
console.log('Current score:', currentScore);
console.log('Active player:', activePlayer);

// Test the visual indicators
console.log(
  'Player 0 has active class:',
  player0El.classList.contains('player--active')
);
console.log(
  'Player 1 has active class:',
  player1El.classList.contains('player--active')
);

// Test complete game state
console.log('Scores:', scores);
console.log('Current Score:', currentScore);
console.log('Active Player:', activePlayer);
console.log('Playing:', playing);
console.log('Player 0 active:', player0El.classList.contains('player--active'));
console.log('Player 1 active:', player1El.classList.contains('player--active'));
