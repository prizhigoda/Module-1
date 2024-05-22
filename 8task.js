const arr = [
  {name: 'test', age: 34, country: 'RF'},
  {name: 'test2', age: 12, country: 'RF'},
  {name: 'test1', age: 54, country: 'RF'}
];

const sortArrayToAscOrDesc = (arr, property, sort = 'asc') => {
  const newArray = [...arr].sort((a, b) => {
    if (a[property] > b[property]){
      return sort === 'asc' ? 1 : -1;
    }
    
    if (a[property] < b[property]){
      return sort === 'desc' ? 1 : -1;
    }

    return 0;
  });
  
  return newArray
}
console.log(sortArrayToAscOrDesc(arr, 'age', 'asc'));
console.log(sortArrayToAscOrDesc(arr, 'age', 'desc'));
