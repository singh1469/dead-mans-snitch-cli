'use strict'

//Interface with dead-mans-snitch via this module

var DeadMansSnitch = require('dead-mans-snitch');


module.exports = {
  /**
   * Get list of snitches
   * @param key string API key to dead mans snitch service
   * return promise
   */
  list: function(key) {
    return new Promise(function(resolve, reject) {

      if (typeof(key) !== 'string') {
        throw 'invalid param, must be of type string - snitch1';
      }
      var client = new DeadMansSnitch.APIClient(key);

      client.getSnitches()
        .then(function(items) {
          resolve(items);
        })
        .catch(function(error) {
          //todo log error
          reject();
        });;
    });
  }
};