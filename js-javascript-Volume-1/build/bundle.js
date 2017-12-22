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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('Loading app.js with ES2015 format, built w/Webpack and Babel loader ...');

// Chapter one
/* 
alert("Hello World!");
confirm("I love Javascript!");
prompt("do you wan tto learn Javascript?");
*/
// Chapter two

// Console operations, other than a display
alert("Console operations ");
var str = "this is a string value.";
console.log('Console, ' + str);

// Order of operations
alert("Order of operations ... ");
var x = 0;
x = 30 - 2 * 3;
console.log('Operations answer 1 30 - 2 * 3 = ' + x);

var x = 0;
x = (30 - 2) * 3;
console.log('Operations answer 2 (30 - 2) * 3 = ' + x);

// Common operators
alert("Common operators ... ");
var a = 2 + 1;
console.log('Addition 2 + 1 answer = ' + a);
var b = 2 - 1;
console.log('Subtraction 2 - 1answer = ' + b);
var c = 2 / 1;
console.log('Division 2 / 1 answer = ' + c);
var d = 2 * 1;
console.log('Mutiplication 2 * 1 answer = ' + d);
var e = 10 % 3;
console.log('Modulo 10 % 3 remainder = ' + e); // returns the ramainder of the frirst value devided by the second.

/***/ })
/******/ ]);