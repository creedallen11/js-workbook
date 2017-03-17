function isEven(n) {
  if (n < 0)
    n = -n;
  function evenCheck(number) {
    if (number == 0)
      return true;
    else if (number == 1)
      return false;
    else
      return isEven(number - 2);
  }
  return evenCheck(n);
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??