function sumSquares(array) {
  let total = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i])) {
      total += sumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }
  return total;
}





console.log(sumSquares([1, 2, 3])); // 1 + 4 + 9 = 14

console.log(sumSquares([[1, 2], 3])); // 1 + 4 + 9 = 14

console.log(sumSquares([[[[[[[[[1]]]]]]]]])); // 1 = 1

console.log(sumSquares([10, [[10], 10], [10]])); // 100 + 100 + 100 + 100 = 400
