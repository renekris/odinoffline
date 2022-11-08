const unsortedArray = [56, 455, 33, 945, 62, 175, 103, 31];
const unsortedArrayTest = [56, 45];

// function mergeSort(array = []) {
//   if (array.length < 2) {
//     return array[0];
//   }

//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > array[i + 1]) {
//       newArray.push(array[i]);
//     } else {
//       newArray.push(array[i + 1]);
//     }
//   }
//   return newArray;
// }

// function mergeSort(array = []) {
//   const high = array.length;

//   if (array.length < 2) {
//     return array[0];
//   }

//   const newArray = [];
//   const mid = high / 2;
//   const left = array.slice(0, mid);
//   const right = array.slice(mid, high);
//   if (right[0] < left[0]) {
//     newArray.push(mergeSort(left));
//   } else {
//     newArray.push(mergeSort(right));
//   }
//   // return mergeSort(newArray);
// }
function mergeSort(array = []) {
  const high = array.length;

  const mid = high / 2;
  const left = array.slice(0, mid);
  const right = array.slice(mid, high);

  if (array.length < 2) {
    return array;
  } else {
    const tempOne = mergeSort(left);
    const tempTwo = mergeSort(right);
    const tempArray = [];
    // for (let i = 0; i < tempOne.length; i++) {
    //   if (tempOne[i] < tempTwo[i]) {
    //     tempArray.push(tempOne[i]);
    //     tempArray.push(tempTwo[i]);
    //   } else {
    //     tempArray.push(tempTwo[i]);
    //     tempArray.push(tempOne[i]);
    //   }
    // }
    let i = 0;
    let j = 0;
    while (i <= tempOne.length && j <= tempTwo.length) {
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
      tempArray.push(tempTwo[i]);
    }
    return tempArray;
  }
}

// console.log(mergeSort(unsortedArray));
console.log(mergeSort(unsortedArray));
// console.log(unsortedArray.slice(0, Math.round(unsortedArray.length / 2)));
