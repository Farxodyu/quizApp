'use strict';
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hughScore = 0;
const displayGuessMassage = (message) => {
  document.querySelector('.guess-message').textContent = message
}
// Challenge
document.querySelector(' .check').addEventListener(
  'click', () => {
    let guessNum = +document.querySelector('.number-input').value;

    // No input
    if (!guessNum) {
      displayGuessMassage('Введите число');
    }
    // Player won
    else if (guessNum === secretNum) {
      displayGuessMassage('Правильно!')
      document.querySelector('body').style.backgroundColor = ' rgb(9, 250, 21)';
      document.querySelector('.question').style.width = '50rem'
      document.querySelector('.question').textContent = secretNum;

      if (score>hughScore){
        hughScore = score
        document.querySelector('.highscore').textContent = hughScore;
      }
    }
    else if (guessNum !== secretNum) {
      if (score > 1) {
        displayGuessMassage(guessNum > secretNum ? 'Число слишком большое!' : 'Слишком мало');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayGuessMassage('Game Over');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
);

document.querySelector('.again').addEventListener('click',()=>{
  score = 20;
  document.querySelector('body').style.background='rgb(0, 0, 0)';
  displayGuessMassage( 'Введите число');
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.number-input').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.question').textContent = '???'
  secretNum = Math.trunc(Math.random() * 20) + 1;
});


