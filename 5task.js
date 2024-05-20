const input1 = [
  ["cat", 5],
  ["dog", 6],
  ["cat", 11],
];

const input2 = [
  ['name', 'test'],
  ['age', 12],
  ['country', 'RF'],
];

const sortDeleteArrayDublicate = (pairsArray) => {

  return pairsArray.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});
};

console.log(sortDeleteArrayDublicate(input1));
console.log(sortDeleteArrayDublicate(input2));
