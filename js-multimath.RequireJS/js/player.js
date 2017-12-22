define([], function () {
//var player = function () { // delete, we are now using as an AMD module; does not depend on any other modules.

    console.log('Loading player.js with AMD modules with RequireJS Format...');

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

    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    }

//}(); // delete, we are now using as an AMD module
});
