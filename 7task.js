const collection = [
  { name: 'test', age: 34, country: 'RF' },
  { name: '', age: null, country: '' },
  { name: 'test1', age: null, country: '' },
  { name: '', age: 12, country: '' },
  { name: '', age: null, country: 'RF' },
];

const sortCollectionFromEmptyObject = (collection) => {
  return newObject = collection.reduce((acc, obj) => {

    for (key in obj) {
      if (obj[key]) {
        acc.push(obj)
        
        break;
      } 
    }

    return acc;
  }, []);
};

console.log(sortCollectionFromEmptyObject(collection));
