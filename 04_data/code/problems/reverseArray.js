function reverseArray(array) {
	reversed = []
	for (var i = array.length - 1; i >= 0; i--)
		reversed.push(array[i]);
	return reversed;
}


function reverseArrayInPlace(array) {
	var lastWriteIndex = array.length - 1;
	for (var i = 0; i <= Math.floor(array.length / 2); i++) {
		var temp = array[i]
		array[i] = array[lastWriteIndex];
		array[lastWriteIndex--] = temp; 
	}
	//console.log(array);
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]