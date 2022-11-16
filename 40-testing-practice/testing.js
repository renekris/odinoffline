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

function caesarCipher(value = '', shift = 0, space = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  const spaceArray = space.split('');
  const whitespaceSeparated = value.split(' ');

  const encoded = [];
  for (let i = 0; i < whitespaceSeparated.length; i++) {
    const word = whitespaceSeparated[i];
    const wordArray = [];
    word.split('').forEach(char => {
      let charSpaceIndex = spaceArray.findIndex(spaceValue => spaceValue.toUpperCase() === char.toUpperCase());
      if (charSpaceIndex + shift >= spaceArray.length) {
        charSpaceIndex = charSpaceIndex - spaceArray.length;
      }
      wordArray.push(spaceArray[charSpaceIndex + shift]);
    });
    encoded.push(wordArray.join(''));
  }
  return encoded.join(' ').toLowerCase();
}

function analyzeArray(array = []) {
  return {
    length: array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    average: (() => {
      const total = array.reduce((prev, current) => prev + current, 0);
      return total / array.length;
    })(),
  }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
