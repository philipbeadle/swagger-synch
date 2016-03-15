var fsFunctions = require('/Projects/swagger-test-synch/fsFunctions.js');
var fs = require('fs');
var path = require('path');
var rootPath = '/Projects/swagger-test-synch/api-test';

gauge.step("Delete any previously created directories", function() {
  try {
    fs.rmdirSync('/Projects/swagger-test-synch/spec-test/_synch');
  } catch (e) {
    //Do nothing
  }
  fsFunctions.mkdirSync('/Projects/swagger-test-synch');
});

gauge.step("Create a new folder <folderPath>", function(folderPath) {
  console.log(path.join('/Projects/swagger-test-synch/spec-test', folderPath));
  fsFunctions.mkdirSync(path.join('/Projects/swagger-test-synch/spec-test', folderPath));
});
