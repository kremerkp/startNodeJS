var http = require("http");

var server = http.createServer(function(request, response) {
  console.log("​'request this'", "request this");
  response.write("<meta charset='utf-8'/>");
  response.write("hi");

  response.end();
});

server.listen(3000);
