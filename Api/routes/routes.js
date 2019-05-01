'use strict';

module.exports = function(app) {
  var RESTAPI = require('../Controllers/controllers');
  console.log('routes initialised')
  // RESTAPI Routes
  app.route('/User')
    .get(RESTAPI.listAllUser)
    .post(RESTAPI.createUser);

  app.route('/User/:UserId')
    .get(RESTAPI.readUser)
    .put(RESTAPI.updateUser)
    .delete(RESTAPI.deleteUser);
};