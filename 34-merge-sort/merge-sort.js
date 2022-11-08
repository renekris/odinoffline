const unsortedArray = [56, 455, 33, 945, 62, 175, 103, 31];

const getRandomArray = (arrayLength) => {
  const array = [];
  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * 1000);
    array.push(randomNumber);
  }
  return array;
}

function mergeSort(array = []) {
  if (array.length < 2) {
    return array;
  }

  const mid = array.length / 2;
  const tempOne = mergeSort(array.slice(0, mid));
  const tempTwo = mergeSort(array.slice(mid, array.length));
  const tempArray = [];
  let i = 0;
  let j = 0;
  while (i < tempOne.length && j < tempTwo.length) {
    if (tempOne[i] < tempTwo[j]) {
      tempArray.push(tempOne[i++]);
    } else {
      tempArray.push(tempTwo[j++]);
    }
  }
  for (; i < tempOne.length; i++) {
    tempArray.push(tempOne[i]);
  }
  for (; j < tempTwo.length; j++) {
    tempArray.push(tempTwo[j]);
  }
  return tempArray;
}

console.log(mergeSort(getRandomArray(50)));
