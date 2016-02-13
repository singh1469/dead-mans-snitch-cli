'use strict'

var program = require('commander');
var snitch = require('./lib/snitch.js');
var chalk = require('chalk');

program
  .version('1.0.0')
  .option('-l, --list', 'List all snitches')
  .option('-h, --healthy', 'List healthy snitches')
  .option('-u, --unhealthy', 'List unhealthy snitches')
  .option('k, --key', 'API key')
  .parse(process.argv);

if (program.list) {
 snitch.list().then(function(items){
console.log(chalk.yellow('Found ' + items.length + ' snitches..'));
 items.forEach(function(item){
var status;
  if(item.status==='healthy'){
	status = chalk.bold.green('healthy');
  }
else{
status = chalk.bold.red(item.status);
}
  console.log(chalk.cyan(item.name) +  ' | ' + status);
  console.log('Checked in @ ' + item.checked_in_at);
});
});
}

if (program.healthy) {
console.log('list healthy snitches');
}

if (program.unhealthy) {
console.log('list unhealthy snitches');
}
