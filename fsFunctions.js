var fs = require('fs');

var fsFunctions = {
  existsSync: function existsSync(filename) {
    try {
      fs.accessSync(filename);
      return true;
    } catch (ex) {
      return false;
    }
  },
  mkdirSync: function mkdirSync (path) {
    try {
      fs.mkdirSync(path);
    } catch (e) {
      //Do nothing
    }
  }
};

module.exports = fsFunctions;
