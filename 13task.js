const array = [
  { name: 'width', value: 300 },
  { name: 'height', value: 100 },
];

const TransformArrayToObject = (input) => {
  return (newArray = input.reduce((acc, obj) => {
    acc[obj.name] = obj.value;

    return acc;
  }, {}));
};

console.log(TransformArrayToObject(array));
