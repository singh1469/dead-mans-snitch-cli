'use strict'

//make user of let syntax
//implement way of allowing user to specify key

var program = require('commander');
var snitch = require('./lib/snitch.js');
var constant = require('./lib/constant.js');
var response = require('./lib/response.js');
var chalk = require('chalk');

program
  .version('1.0.0')
  .option('-l, --list', 'List all snitches')
  .option('-h, --healthy', 'List healthy snitches')
  .option('-u, --unhealthy', 'List unhealthy snitches')
  .option('k, --key', 'API key')
  .parse(process.argv);

if (program.list) {
  //get list of all snitches
  snitch.list().then(function(items) {
    //generate client response
    var output = response.generate(items);
    if (output === false) {
      output = 'No snitches found.';
    }
    response.write(output); //output to user
  })
    .catch(function(error) { //catch errors
      //output generic message
      var output = 'Sorry, there was an error, check the logs';
      response.write(output);
    });
});
}

if (program.healthy) {
  //get list of healthy snitches
  snitch.list().then(function(items) {
    //specify type of snitches to include - healthy
    var output = response.generate(items, constant.STATUS_HEALTHY);
    if (output === false) {
      output = 'No ' + items, constant.STATUS_HEALTHY + ' snitches found.';
    }
    response.write(output); //output to user
  });
    .catch(function(error) { //catch errors
      //output generic message
      var output = 'Sorry, there was an error, check the logs';
      response.write(output);
    });
}

if (program.unhealthy) {
  //get list of unhealthy snitches
  snitch.list().then(function(items) {
    //specify type of snitches to include - unhealthy
    var output = response.generate(items, constant.STATUS_UNHEALTHY);
    //generate client response
    if (output === false) {
      output = 'No ' + items, constant.STATUS_UNHEALTHY + ' snitches found.';
    }
    response.write(output); //output to user
  });
    .catch(function(error) { //catch errors
      //output generic message
      var output = 'Sorry, there was an error, check the logs';
      response.write(output);
    });
}