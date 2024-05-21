const array = [
  { name: 'width', value: 300 },
  { name: 'height', value: 100 },
];

const transformArrayToObject = (array) => {
  return (newArray = array.reduce((acc, obj) => {
    acc[obj.name] = obj.value;

    return acc;
  }, {}));
};

console.log(transformArrayToObject(array));
