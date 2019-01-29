const jayson = require('jayson');

const client = jayson.client.http({
  port: 4080,
  hostname: 'localhost'
});

// Test RPC methods
function add(a, b, callback) {
  client.request('add', [a,b], function(httpError, serverError, response) {
    if(httpError || serverError) console.log("error");
    console.log(response);
    callback(response); 
  });
}

module.exports = {
  add
}