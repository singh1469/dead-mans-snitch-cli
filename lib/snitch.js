'use strict'

var DeadMansSnitch = require('dead-mans-snitch');


module.exports = {
  list: function(key) {
var client = new DeadMansSnitch.APIClient(key);
    return new Promise(function(resolve,reject){
	client.getSnitches()
                .then(function (items) {
                        resolve(items);
                });
});
  },
       
  healthy: function() {
    return "Hola";
  },

  unhealthy: function(){
	
  }
};
