var player = function () {

    console.log('Loading player.js ...');    

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

}();
