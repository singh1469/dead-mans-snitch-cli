'use strict'

//Handle any authentication stuff here

module.exports = {
	/**
	* Get users api key
	* @return string
	*/
	getKey : function() {
		//attempt to get key from environment variable
		var key = ('DEAD_MANS_SNITCH_KEY' in process.env) ? process.env.DEAD_MANS_SNITCH_KEY : '';
		return key;
	}
};