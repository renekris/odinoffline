function sumRange(num) {
  if (num === 0) {
    return 0;
  }
  console.log(num);
  return num + sumRange(num - 1);
}

console.log(sumRange(3));
