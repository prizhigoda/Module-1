const arr1 = [5, 2, 7, 3, 6, 8, 2, 9, 1];
const arr2 = [4, 2, 9, 4, 5, 4];

const findSameNumbers = (arr1, arr2) => {
  let result = [];

  for (const num of arr1) {

    if (arr2.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
};

console.log(findSameNumbers(arr1, arr2));
