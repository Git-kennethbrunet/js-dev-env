// this file isn't transpiled, so we must use commonJS and ES5.

// register babel to transpile before our test specs execute.
require('babel-register')();

// disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
