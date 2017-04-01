// 'use strict';
// const WAMP_SERVER = require('wamp-server');
// const SERVER = new WAMP_SERVER({
//   port: process.env.PORT || 8000,
//   realms: ['realm1'], // array or string 
// });


WAMPRT_TRACE = true;

var Router = require('wamp.rt');
var program = require('commander');

program
    .option('-p, --port <port>', 'Server IP port', parseInt,8000);

//
// WebSocket server
//
var app = new Router(
    { port: program.port}
);
