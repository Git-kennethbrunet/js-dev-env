
console.log('Loading player.js with CommonJS module with SystemJS Format...');

// private members
var playerName = '';

function logPlayer() {
  console.log('The current player is ' + playerName + '.');
}

function setName(newName) {
  playerName = newName.trim();
}

function getName() {
  return playerName;
}

// adding this makes this player.js a commonJS module.
exports.logPlayer = logPlayer;
exports.setName = setName;
exports.getName = getName;
