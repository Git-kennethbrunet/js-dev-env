define(['./player', './game'], function (player, game) {
// (function () { // delete, we are now using as an AMD module

    console.log('Loading app.js with AMD modules with RequireJS Format...');

    // add click handler to the start game button
    document.getElementById('startGame').addEventListener('click', function () {
        player.setName(document.getElementById('playername').value);
        game.printGame();
    });

    // add click handler to the calculate score button
    document.getElementById('calculate').addEventListener('click', function () {
        game.calculateScore();
    });

    // set the default number of problems
    document.getElementById('problemCount').value = game.getProblemCount();

// })(); // delete, we are now using as an AMD module
}); 