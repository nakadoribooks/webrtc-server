'use strict';
const WAMP_SERVER = require('wamp-server');
const SERVER = new WAMP_SERVER({
  port: process.env.PORT || 8000,
  realms: ['realm1'], // array or string 
});
// to close the server - SERVER.close();


