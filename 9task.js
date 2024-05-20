const input1 = [5, 2, 7, 3, 6, 8, 2, 9, 1];
const input2 = [4, 2, 9, 4, 5, 4];

const findSameNumbers = (input1, input2) => {
  let result = [];

  for (const num of input1) {

    if (input2.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
};

console.log(findSameNumbers(input1, input2));
