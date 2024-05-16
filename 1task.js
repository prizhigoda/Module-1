const elements = [6, 43, -6, 3, 0, 5, 2, 7];

const sortElements = (arr, direction) => {
  const sortedArray = [...arr];
  switch (direction) {
    case 'asc':
      sortedArray.sort((a, b) => a - b);

      return sortedArray;
    case 'desc':
      sortedArray.sort((a, b) => b - a);

      return sortedArray;
    default:

      return sortedArray;
  }
};

const sortedArrayAsc = sortElements(elements, 'asc');
console.log(sortedArrayAsc);

const sortedArrayDesc = sortElements(elements, 'desc');
console.log(sortedArrayDesc);
