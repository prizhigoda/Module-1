const collection = [
  { name: 'test', age: 34, country: 'RF' },
  { name: '', age: null, country: '' },
  { name: 'test1', age: null, country: '' },
  { name: '', age: 12, country: '' },
  { name: '', age: null, country: 'RF' },
];

const sortCollectionFromEmptyObject = (input) => {
  
  return newObject = input.reduce((acc, obj) => {
    let hasValue = false;

    for (key in obj) {
      if (obj[key] !== '' && obj[key] !== null && obj[key] !== undefined) {
        hasValue = true;
        
        break;
      } 
    }
    if (hasValue){
      acc.push(obj)
    }

    return acc
  }, []);
};

console.log(sortCollectionFromEmptyObject(collection));
