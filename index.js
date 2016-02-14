'use strict'

//main file, entry point

var program = require('commander');
var auth = require('./lib/auth.js');
var snitch = require('./lib/snitch.js');
var constant = require('./lib/constant.js');
var response = require('./lib/response.js');
var chalk = require('chalk');

var api_key = auth.getKey();


program
  .version('1.0.0')
  .option('-l, --list', 'List all snitches')
  .option('-h, --healthy', 'List healthy snitches')
  .option('-u, --unhealthy', 'List unhealthy snitches')
  .parse(process.argv);

if (api_key === '') {
  var message = chalk.red.bold('Sorry, no api key found. Try setting DEAD_MANS_SNITCH_KEY as an environment variable containing your api key');
  response.write(message);
  return;
}

if (program.list) {
  //get list of all snitches
  snitch.list(api_key).then(function(items) {
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
  return;
}

if (program.healthy) {
  //get list of healthy snitches
  snitch.list(api_key).then(function(items) {
    //specify type of snitches to include - healthy
    var output = response.generate(items, constant.STATUS_HEALTHY);
    if (output === false) {
      output = 'No ' + items, constant.STATUS_HEALTHY + ' snitches found.';
    }
    response.write(output); //output to user
  })
    .catch(function(error) { //catch errors
      //output generic message
      var output = 'Sorry, there was an error, check the logs';
      response.write(output);
    });
  return;
}

if (program.unhealthy) {
  //get list of unhealthy snitches
  snitch.list(api_key).then(function(items) {
    //specify type of snitches to include - unhealthy
    var output = response.generate(items, constant.STATUS_UNHEALTHY);
    //generate client response
    if (output === false) {
      output = 'No ' + items, constant.STATUS_UNHEALTHY + ' snitches found.';
    }
    response.write(output); //output to user
  })
    .catch(function(error) { //catch errors
      //output generic message
      var output = 'Sorry, there was an error, check the logs';
      response.write(output);
    });
  return;
}