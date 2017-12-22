import { getName as getPlayerName, logPlayer } from './player.js';
import * as scoreboard from './scoreboard.js';

console.log('Loading game.js with ES2015 format, built w/Webpack and Babel loader ...');

// private members
var factorElement = document.getElementById('factor');
var problemsPerGame = 3; // set default value

function printGame() {

  // player.logPlayer();
  logPlayer();

  // determine the number of problems to show
  setProblemCount(document.getElementById('problemCount').value);

  // create the html for the current game
  var gameForm = '';
  for (var i = 1; i <= problemsPerGame; i++) {
    gameForm += '<div class="form-group">';
    gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
    gameForm += factorElement.value + ' x ' + i + ' = </label>';
    gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
    gameForm += '</div>';
  }

  // add the new game to the page
  var gameElement = document.getElementById('game');
  gameElement.innerHTML = gameForm;

  // enable the calculate score button
  document.getElementById('calculate').removeAttribute('disabled');
}

function calculateScore() {

  var problemsInGame = getProblemCount();
  var score = 0;
  var percentage = 0;

  // loop through the text boxes and calculate the number that are correct
  for (var i = 1; i <= problemsInGame; i++) {
    var answer = document.getElementById('answer' + i).value;
    if (i * factorElement.value == answer) {
      score++;
    }
  }

  percentage = score / problemsInGame * 100;

  // create a new result object to pass to the scoreboard
  var result = {
    name: getPlayerName(), // can now be used here, depend on player modules!
    percentage: percentage.toFixed(2),
    score: score,
    problems: problemsInGame,
    factor: factorElement.value
  };

  // add the result and update the scoreboard
  // var scoreboard = new Scoreboard(); // new constructor usage
  scoreboard.addResult(result);
  scoreboard.updateScoreboard();

  // disable the calculate score button
  document.getElementById('calculate').setAttribute('disabled', 'true');
}

function setProblemCount(newProblemCount) {
  problemsPerGame = newProblemCount;
}

function getProblemCount() {
  return problemsPerGame;
}

export {
  printGame,
  calculateScore,
  setProblemCount,
  getProblemCount
}
