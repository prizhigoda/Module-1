const input = [
  { name: 'test', price: 200 },
  { name: 'test1', price: 300 },
  { name: 'test', price: 100 },
  { name: 'test', price: 600 },
];

const groupOrdersByName = (input) => {
  const arr = [];
  const superObject = input.reduce((acc, obj) => {
    if (acc[obj.name]) {
      acc[obj.name].price += obj.price;
    } else acc[obj.name] = obj;

    return acc;
  }, {});
  for (key in superObject) {
    arr.push(superObject[key]);
  }

  return arr;
};

console.log(groupOrdersByName(input));
