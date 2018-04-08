'use strict';
const fs = require('fs');

module.exports = function(Assets) {
  Assets.changeColor = function(color, nameOfColor, cb) {
    let config = JSON.parse(fs.readFileSync('./client/assets/config.json', 'utf8'));
    if (nameOfColor == 'main') {
      config['main_color'] = color;
    } else if (nameOfColor == 'second') {
      config['second_color'] = color;
    }
    fs.writeFile('./client/assets/config.json', JSON.stringify(config), (err) => {
      if (err) throw err;
      cb(null, 'Color modified');
    });
  };

  Assets.remoteMethod('changeColor', {
    accepts: [{arg: 'color', type: 'string'}, {arg: 'nameOfColor', type: 'string'}],
    returns: {arg: 'modofied', type: 'string'},
    http: {verb: 'post', 'path': '/changeColor'},
  });
};
