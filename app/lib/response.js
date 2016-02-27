'use strict'

//Handle client response here

var chalk = require('chalk');
var constant = require('./constant.js');

module.exports = {
	/**
	 * create response for user
	 * @param items array of snitches
	 * @param statusType OPTIONAL string snitch status to include
	 * @return array of strings or false on no matches
	 */
	generate: function(items, statusType) {
		if (Array.isArray(items) === false) {
			throw "param must be of type array, error response1";
		}
		if (statusType !== undefined && typeof statusType !== 'string') {
			throw "param must be of type string, error response2";
		}

		//filter out any entries in items that do not match statusType (if statusType is set)
		var status, output, count;
		output = [];
		count = 0;
		items.forEach(item=> {
			if (statusType !== undefined) {
				if (item.status !== statusType) {
					return; //do not process this entry as status does not match
				}
			}
			if (item.status === constant.healthy) {
				status = chalk.bold.green(constant.healthy);
			} else {
				status = chalk.bold.red(item.status);
			}
			//es6 template literals
			output.push(chalk.cyan(item.name) + ' | ' + status);
			output.push(`Checked in @ ${item.checked_in_at}`);
			count++;
		});

		if (count === 0) {
			return false;
		}

		//add generic message to the start of the array
		output.unshift(`Found ${count} snitches..`);
		return output;
	},


	/**
	 * output response to user
	 * @param items array/string of strings to output
	 * @return true always
	 */
	write: function(items) {
		if (Array.isArray(items) === false && typeof items !== 'string') {
			throw "param must be of type array or string, error response1";
		}
		if (Array.isArray(items) && items.length < 1) {
			throw "param must not be an empty array, error response2";
		}
		if (typeof items === 'string' && items.trim() === '') {
			throw "param must not be an empty string, error response3";
		}
		//add new line breaks
		var output = '';
		if (Array.isArray(items)) {
			//es8 closure syntax
			items.forEach(item=> output += '\n' + item);
		} else {
			output = items + '\n';
		}

		process.stdout.write(output);
		return true;
	}
};