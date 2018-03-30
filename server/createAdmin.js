'use strict';

const server = require('./server');

const Role = server.models.Role;
const Utilisateur = server.models.Utilisateur;
const RoleMapping = server.models.RoleMapping;
const ds = server.dataSources.heroku || server.dataSources.db;

// Create the admin role
Role.findOne({where: {name: 'admin'}}, (err, exists) => {
  if (err) throw err;
  if (!exists) {
    Role.create({
      name: 'admin',
    }, (err, role) => {
      createAdmin(role);
    });
  } else {
    ds.disconnect();
  }
});

function createAdmin(role) {
  Utilisateur.findOne({where: {email: 'admin@aiguilleurs.fr'}}, (err, exists) => {
    if (err) throw err;
    if (!exists) {
      Utilisateur.create({
        username: 'Admin',
        email: 'admin@aiguilleurs.fr',
        password: 'a',
      }, (err, user) => {
        if (err) throw err;
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: user.id,
          modelName: 'Utilisateur',
        }, () => {
          console.log('Tout a bien été créé !');
          ds.disconnect();
        });
      });
    }
  });
}
