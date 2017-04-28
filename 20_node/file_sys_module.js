var fs = require("fs");
fs.readFile("file.txt", "utf8", function(error, text) {
	if (error)
		throw error;
	console.log("The file contained:", text);
});


fs.readFile("file.txt", function(error, buffer) {
	if (error)
		throw error;
	console.log("The file contained", buffer.length, "bytes",
				"The first byte is:", buffer[0]);
});


// similar writeFile

fs.writeFile("graffiti.txt", "Node was here", function(error) {
	if (error)
		console.log("Failted to write file:", error);
	else
		console.log("File written");
});

/*
readdir - return the files in a directory as an array of strings
stat - retrieve information about a file
rename - will rename a file
unlink - will remove one

many of the functions in fs have sync/async versions
*/

console.log("Synchronous read:", fs.readFileSync("file.txt", "utf8"));