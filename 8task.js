const arr = [
  {name: 'test', age: 34, country: 'RF'},
  {name: 'test2', age: 12, country: 'RF'},
  {name: 'test1', age: 54, country: 'RF'}
];

const sortArrayToAscOrDesc = (arr, sort = 'asc') => {
  const newArray = arr.slice().sort((a, b) => {
    if(a.age > b.age) return sort === 'asc' ? 1 : -1;
    
    if(a.age < b.age) return sort === 'desc' ? 1 : -1;

    return 0;
  });
  
  return newArray
}
console.log(sortArrayToAscOrDesc(arr, 'asc'));
console.log(sortArrayToAscOrDesc(arr, 'desc'));
