const elements = [6, 43, -6, 3, 0, 5, 2, 7]

const sortElements = (arr, direction) => {
  if (direction === 'increasing') {
    return arr.sort((a, b) => a - b)
  }
  else {
    return arr.sort((a, b) => b - a)
  }
  }
const sortedIncreasing = sortElements(elements, 'increasing')
console.log(sortedIncreasing)
const sortedDecreasing = sortElements(elements)
console.log(sortedDecreasing)