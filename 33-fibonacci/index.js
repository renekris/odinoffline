function fibs(range) {
  const fibArray = [0, 1];
  for (let i = 0; i < range - 2; i += 1) {
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
  }
  return fibArray;
}

console.log(fibs(8));

function fibsRecursive(range, array) {
  array = array || [0, 1];
  if (range <= 2) {
    return array;
  }
  return fibsRecursive(range - 1, array.concat(array[array.length - 1] + array[array.length - 2]));
}

console.log(fibsRecursive(8));

function fibsRecursiveSmall(range, array = [0, 1]) {
  return range <= 2 ? array : fibsRecursive(range - 1, array.concat(array[array.length - 1] + array[array.length - 2]))
}

console.log(fibsRecursiveSmall(8));

function fibsNth(n) {
  if (n < 2) {
    return n;
  }
  return fibsNth(n - 1) + fibsNth(n - 2);
}

console.log(fibsNth(9));
