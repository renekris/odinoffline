let copy;
function all(array, callback) {
  copy = copy || array.slice();

  if (copy.length === 0) {
    return true;
  }

  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  }

  return false;
}

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven); // false
