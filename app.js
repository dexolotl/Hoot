var static = require("node-static");

var fileServer = new static.Server("");

require("http").createServer(function (request, response) {
	request.addListener("end", function() {
		fileServer.serve(request, response);
	}).resume();
}).listen(8888, "localhost");

console.log("File Server running on localhost:8888");