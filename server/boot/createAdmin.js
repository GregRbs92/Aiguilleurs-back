'use strict';

module.exports = function(app, cb) {
  const Role = app.models.Role;
  const Utilisateur = app.models.Utilisateur;
  const RoleMapping = app.models.RoleMapping;

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
    Utilisateur.findOne({where: {email: 'admin@aiguilleurs.fr'}}, function(err, exists) {
      if (err) return cb(err);
      if (!exists) {
        Utilisateur.create({
          username: 'Admin',
          email: 'admin@aiguilleurs.fr',
          password: 'a',
        }, function(err, user) {
          if (err) return cb(err);
          role.principals.create({
            principalType: RoleMapping.USER,
            principalId: user.id,
            modelName: 'Utilisateur',
          });
        });
      }
    });
  }

  cb();
};
