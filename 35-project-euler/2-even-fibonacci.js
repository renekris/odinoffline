// https://projecteuler.net/problem=2

function evenFibonacci(range, array) {
  if (range <= 1) {
    return 0;
  }
  array = array || [0, 1];

  let sum = 0;
  if (array[array.length - 1] % 2 === 0) {
    sum += array[array.length - 1];
  }
  return sum + evenFibonacci(range - 1, array.concat(array[array.length - 1] + array[array.length - 2]));
}


// this was fun!
// 0, 1, 1, >2<, 3, 5, >8<, 13, 21, >34<, 55, 89, >144<, 233....
console.log(evenFibonacci(13)); //2 + 8 + 34 + 144 = 188
console.log(evenFibonacci(20)); //2 + 8 + 34 + 144 + .... = 3382
