'use strict';

module.exports = {
  'restApiRoot': '/api',
  'host': 'https://les-aiguilleurs.herokuapp.com/',
  'port': process.env.STRONGLOOP_PORT || 80,
  'remoting': {
    'context': false,
    'rest': {
      'handleErrors': false,
      'normalizeHttpPath': false,
      'xml': false,
    },
    'json': {
      'strict': false,
      'limit': '100kb',
    },
    'urlencoded': {
      'extended': true,
      'limit': '100kb',
    },
    'cors': false,
  },
};
