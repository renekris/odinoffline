// https://projecteuler.net/problem=1
function sumOfMultiples(amount) {
  if (amount <= 0) {
    return 0;
  }
  let total = 0;
  if (amount % 3 === 0 || amount % 5 === 0) {
    total += amount;
    return total + sumOfMultiples(amount - 1);
  } else {
    return sumOfMultiples(amount - 1);
  }
}

console.log(sumOfMultiples(999));
