'use strict';

var server = require('./server');
var ds = server.dataSources.db;
var lbTables = ['Artiste', 'User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
ds.autoupdate(lbTables, function(er) {
  if (er) throw er;
  ds.disconnect();
});
