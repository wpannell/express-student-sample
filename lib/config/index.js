var nconf = require('nconf');

nconf.argv().env('_');
var environment = nconf.get('NODE:ENV') || 'dev';
nconf.file(environment, 'config/' + environment + '.json');
nconf.file('default', 'config/default' + '.json');

module.exports = {
  get: function get(key) {
    return nconf.get(key);
  }
};
