const fillArray = (inputArrLenght) => {
  const arr = [];
  let result = '';

  while (arr.length < inputArrLenght) {
    arr.push((result += 'x'));
  }

  return arr;
};

console.log(fillArray(12));
