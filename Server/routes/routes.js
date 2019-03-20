'use strict';

module.exports = function(app) {
  var RESTAPI = require('../Controllers/controllers');
  console.log('routes initialised')
  // RESTAPI Routes
  app.route('/Shit')
    .get(RESTAPI.listAllShit)
    .post(RESTAPI.createShit);

  app.route('/Shit/:ShitId')
    .get(RESTAPI.readShit)
    .put(RESTAPI.updateShit)
    .delete(RESTAPI.deleteShit);
};