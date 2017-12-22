
console.log('Loading player.js with ES2015 format, built w/Webpack and Babel loader ...');

// private members
var playerName = '';

export function logPlayer() {
  console.log('The current player is ' + playerName + '.');
}

export default function setName(newName) {
  playerName = newName.trim();
}

export function getName() {
  return playerName;
}
