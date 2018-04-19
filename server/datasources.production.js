'use strict';

module.exports = {
  'db': {
    'host': 'world-321.fr.planethoster.net',
    'port': 3306,
    'database': 'lesaepqx_aiguilleurs',
    'password': 'KPXnQHWpx6FUfwh1b2',
    'name': 'db',
    'user': 'lesaepqx_user',
    'connector': 'mysql',
  },
  'local-storage': {
    'name': 'local-storage',
    'connector': 'loopback-component-storage',
    'provider': 'filesystem',
    'root': './server/uploads',
  },
};
