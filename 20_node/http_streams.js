var http = require("http");

// server that reads request bodies and streams them back to client in upper case
http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	request.on("data", function(chunk) {
		response.write(chunk.toString().toUpperCase());
	});
	request.on("end", function() {
		response.end();
	});
}).listen(8000);


// send a request to the uppercase server and write out the response
var request = http.request({
	hostname: "localhost",
	port: 8000,
	method: "POST"
}, function(response) {
	response.on("data", function(chunk) {
		process.stdout.write(chunk.toString());
		//console.log(chunk.toString());
	});
});
request.end("Hello server");