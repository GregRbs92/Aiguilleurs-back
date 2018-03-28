'use strict';

module.exports = function(app, cb) {
  const Role = app.models.Role;
  const User = app.models.User;

  // Create the admin role
  Role.findOne({where: {name: 'admin'}}, function(err, exists) {
    if (err) return cb(err);
    if (!exists) {
      Role.create({
        name: 'admin',
      }, function(err, role) {
        createAdmin(role);
      });
    } else {
      createAdmin(exists);
    }
  });

  function createAdmin(role) {
    User.findOne({where: {email: 'admin@aiguilleurs.fr'}}, function(err, exists) {
      if (err) return cb(err);
      if (!exists) {
        User.create({
          username: 'Admin',
          email: 'admin@aiguilleurs.fr',
          password: 'a',
        }, function(err, user) {
          if (err) return cb(err);
          role.principals.create({
            principalType: 'User',
            principalId: user.id,
          });
        });
      }
    });
  }

  cb();
};
