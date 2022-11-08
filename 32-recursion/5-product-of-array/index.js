function productOfArray(array) {
  if (array.length <= 0) {
    return 1;
  }

  const firstElement = array.shift();
  return firstElement * productOfArray(array);
}

var six = productOfArray([1, 2, 3]) // 6
var sixty = productOfArray([1, 2, 3, 10]) // 60

console.log(six);
console.log(sixty);
