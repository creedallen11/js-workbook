function deepEqual(a, b) {
	if (a === b) return true;

	if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
	
	var numPropertiesA = 0; var numPropertiesB = 0;
	for (var prop in a)
		numPropertiesA++;
	for (var prop in b) {
		numPropertiesB++;
		if (!(prop in a) || !deepEqual(a[prop], b[prop]))
			return false;
	}
	return (numPropertiesA == numPropertiesB);


}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true