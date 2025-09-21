// Section 1: DOM Element Selection & Caching
// Modal Development Hour 1 - Foundation & Class Toggling
'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');
console.log('Modal project ready!');

// Select the Modal Element
const modalEl = document.querySelector('.modal');

// Select the Overlay Element
const overlayEl = document.querySelector('.overlay');

// Select the Close Button
const btnCloseModalEl = document.querySelector('.close-modal');

// Select ALL the Open Buttons Using querySelectorAll
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Verify Selections Worked Correctly
console.log('Open buttons:', btnsOpenModalEl.length);

// Section 2: Open/Close Helpers with Class Toggling
// Create openModal Function
const openModal = function () {
  // Remove the hidden class from modal to make it visible
  modalEl.classList.remove('hidden');

  // Remove the hidden class from overlay to show dark background
  overlayEl.classList.remove('hidden');
};

// Create closeModal Function
const closeModal = function () {
  // Add the hidden class back to modal to hide it
  modalEl.classList.add('hidden');

  // Add the hidden class back to overlay to hide dark background
  overlayEl.classList.add('hidden');
};

// Section 3: Connecting Everything with Event Listeners
// Attach openModal Function to All Show Buttons
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

// Attach closeModal Function to Close Button
btnCloseModalEl.addEventListener('click', closeModal);

// Attach closeModal Function to Overlay Click
overlayEl.addEventListener('click', closeModal);
