'use strict';

module.exports = {
  'db': {
    'host': 'ec2-54-247-81-88.eu-west-1.compute.amazonaws.com',
    'port': 5432,
    'url': process.env.DATABASE_URL || 'postgres://cmatvgtasnzeye:7f23ae12ad56d6a362a4be34301f1f4a1bae74d3a19fbd9ba5e677f096f2016f@ec2-54-247-81-88.eu-west-1.compute.amazonaws.com:5432/d95v1to2sbh607',
    'ssl': true,
    'database': 'd95v1to2sbh607',
    'password': '7f23ae12ad56d6a362a4be34301f1f4a1bae74d3a19fbd9ba5e677f096f2016f',
    'name': 'db',
    'user': 'cmatvgtasnzeye',
    'connector': 'postgresql',
  },
};
