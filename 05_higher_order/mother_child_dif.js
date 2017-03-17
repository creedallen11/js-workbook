// load dependencies
require("./code/load")("code/ancestry.js", "code/chapter/05_higher_order.js", "code/intro.js");
"use strict";

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}


var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var differences = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(differences));
// → 31.2