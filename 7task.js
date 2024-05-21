const collection = [
  { name: 'test', age: 34, country: 'RF' },
  { name: '', age: null, country: '' },
  { name: 'test1', age: null, country: '' },
  { name: '', age: 12, country: '' },
  { name: '', age: null, country: 'RF' },
];

const sortCollectionFromEmptyObject = (collection) => {
  return newObject = collection.reduce((acc, obj) => {
    let isValue = false;

    for (key in obj) {
      if (obj[key]) {
        isValue = true;
        
        break;
      } 
    }
    
    if (isValue){
      acc.push(obj);
    }

    return acc;
  }, []);
};

console.log(sortCollectionFromEmptyObject(collection));
