WAMPRT_TRACE = true;

var Router = require('wamp.rt');
var program = require('commander');

program
    .option('-p, --port <port>', 'Server IP port', parseInt,process.env.PORT || 8000);


var app = new Router(
    { port: program.port}
);
