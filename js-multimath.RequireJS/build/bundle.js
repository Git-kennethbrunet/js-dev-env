/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
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
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (player, game) {
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
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); 

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (player, scoreboard) {
// var game = function () { // delete, we are now using as an AMD module; depend on player and scoreboard modules.

    console.log('Loading game.js with AMD modules with RequireJS Format ( bundled w/Webpack 2 ) ...');

    // private members    
    var factorElement = document.getElementById('factor');
    var problemsPerGame = 3; // set default value

    function printGame() {

        player.logPlayer();

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
            name: player.getName(), // can now be used here, depend on player modules! 
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

    // return public members
    return {
        printGame: printGame,
        calculateScore: calculateScore,
        setProblemCount: setProblemCount,
        getProblemCount: getProblemCount
    };
// }(); // delete, we are now using as an AMD module
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); 


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
// var Scoreboard = function() { // delete, we are now using as an AMD module; does not depend on any other modules.

    console.log('Loading scoreboard.js with AMD modules with RequireJS Format...');

    // private members
    var results = []; // array to store result of every game

    function addResult(newResult) {
        results.push(newResult);
    }

    function updateScoreboard() {

        var output = '<h2>Scoreboard</h2>';

        // loop over all results and create the html for the scoreboard
        for (var index = 0; index < results.length; index++) {
            var result = results[index];
            output += '<h4>';
            output += result.name + ': ' + result.score + ' / ' + result.problems + ' for factor ' + result.factor + ' percentage is ' + result.percentage + '%';
            output += '</h4>';
        }

        // add the updated scoreboard to the page
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;  
    }

    // return public members
    return {
        addResult: addResult,
        updateScoreboard: updateScoreboard
    }

//}(); // delete, we are now using as an AMD module
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);