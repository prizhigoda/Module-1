const example1 = [['cat', 5], ['dog', 6], ['cat', 11]];
const result1 = arrayToObject(example1);

const example2 = [['name', 'test'], ['age', 12], ['country', 'RF']];
const result2 = arrayToObject(example2);

function arrayToObject(pairsArray) {
    return pairsArray.reduce((acc, [key, value]) => {
        acc[key] = value;

        return acc;
    }, {})
}

console.log(result1);
console.log(result2);
