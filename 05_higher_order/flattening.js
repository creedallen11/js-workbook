var arrays = [[1, 2, 3], [4, 5], [6]];
var flattened = arrays.reduce(function(flat, current) {
	return flat.concat(current);
});
console.log(arrays);
console.log(flattened);