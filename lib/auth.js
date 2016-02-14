'use strict'

module.exports = {
	getKey : function() {
		//attempt to get key from environment variable
		var key = ('DEAD_MANS_SNITCH_KEY' in process.env) ? process.env.DEAD_MANS_SNITCH_KEY : '';
		return key;
	}
};