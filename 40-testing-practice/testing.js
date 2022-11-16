function capitalize(string = '') {
  return string.toUpperCase();
}

function reverseString(string = '') {
  return string.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
}

export { capitalize, reverseString, calculator };
