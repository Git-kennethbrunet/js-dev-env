import assignPlayerName from './player.js';
import { printGame, calculateScore, getProblemCount } from './game.js';

console.log('Loading app.js with ES2015 format, built w/Webpack and Babel loader ...');

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function () {
  // player.setName(document.getElementById('playername').value);
  assignPlayerName(document.getElementById('playername').value);
  // game.printGame();
  printGame();
});

// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', function () {
  // game.calculateScore();
  calculateScore();
});

// set the default number of problems
// document.getElementById('problemCount').value = game.getProblemCount();
document.getElementById('problemCount').value = getProblemCount();
