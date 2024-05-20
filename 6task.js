const orderByName = [
  { name: 'test', price: 200 },
  { name: 'test1', price: 300 },
  { name: 'test', price: 100 },
  { name: 'test', price: 600 },
];

const groupOrdersByName = (arrayOfObjects) => {

  const arr = [];
  const newObject = arrayOfObjects.reduce((acc, obj) => {
    acc[obj.name] 
      ? acc[obj.name].price += obj.price 
      : acc[obj.name] = obj;

    return acc;
  }, {});

  for (key in newObject) {
    arr.push(newObject[key]);
  }

  return arr;
};

console.log(groupOrdersByName(orderByName));
