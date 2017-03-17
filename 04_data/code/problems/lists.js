function arrayToList(array) {
	var list = null;
	for (var i = array.length - 1; i >= 0; i--) {
		list = {value : array[i], rest : list};
	}
	return list;
}

function listToArray(list) {
	var output = [];
	for (var node = list; node; node = node.rest) {
		output.push(node.value);
	}
	return output;
}

function prepend(v, list) {
	return {value : v, rest : list};
}

function nth(list, n) {
	if (!list) return undefined;
	
	if (n == 0) 
		return list.value;
	else
		return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20