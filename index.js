const button = document.querySelector('button');
const confettiContainer = document.querySelector('canvas');

button.addEventListener('click', () => {
  // if the confetti is not on the screen
  if (getComputedStyle(confettiContainer).display === 'none' /** Boolean */) {
    // show the confetti
    confettiContainer.style.display = 'block';
  } else {
    // hide the confetti
    confettiContainer.style.display = 'none';
  }
});
