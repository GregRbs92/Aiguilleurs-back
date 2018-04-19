'use strict';

module.exports = {
  'db': {
    'host': 'ec2-79-125-12-27.eu-west-1.compute.amazonaws.com',
    'port': 5432,
    'url': process.env.DATABASE_URL || 'postgres://nhznbxakvkregu:7d7e6c426eeff9bd1e8df70e4b8caca8c78667851cd95a030e4d0efc5b8bf078@ec2-79-125-12-27.eu-west-1.compute.amazonaws.com:5432/d1vl9aag43cck7',
    'ssl': true,
    'database': 'd1vl9aag43cck7',
    'password': '7d7e6c426eeff9bd1e8df70e4b8caca8c78667851cd95a030e4d0efc5b8bf078',
    'name': 'db',
    'user': 'nhznbxakvkregu',
    'connector': 'postgresql',
  },
  'local-storage': {
    'name': 'local-storage',
    'connector': 'loopback-component-storage',
    'provider': 'filesystem',
    'root': './server/uploads',
  },
};
