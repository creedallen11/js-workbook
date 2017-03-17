/*
Write a function countBs that takes a string as its only argument and returns a 
number that indicates how many uppercase “B” characters are in the string. */

function countBs(str) {
	return countChar(str, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


function countChar(str, char) {
	var count = 0;
	for (var c = 0; c < str.length; c++) {
		if (str.charAt(c) == char) count++;
	}
	return count;
}