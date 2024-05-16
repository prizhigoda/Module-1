const array = [5, 7, 2, 9, 5, 6, 3, 1, 8];

const replaceNumber = (arr) => {
  let max = array[0];
  let min = array[0];

  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    } else if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
  }

  [arr[minIndex], arr[maxIndex]] = [max, min];

  return arr;
};
console.log(replaceNumber(array));
