'use strict';

var server = require('./server');
var ds = server.dataSources.heroku || server.dataSources.db;
var lbTables = ['AccessToken', 'ACL', 'RoleMapping', 'Role', 'Artiste', 'User'];
ds.autoupdate(lbTables, function(er) {
  if (er) throw er;
  ds.disconnect();
});
