var m2 = require(`./mod2`);
var m3 = require(`./mod3`);
var http = require(`http`);

var server = http.createServer(function(request, response) {
  console.log("got a request!");
  response.write();
  response.end();
});

server.listen(3000);
