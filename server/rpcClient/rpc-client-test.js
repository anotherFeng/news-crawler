const client = require('./rpc-client');

client.add(1,2, function(response) {
  console.assert(response == 3);
});