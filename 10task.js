const input1 = '__|----|_|-|____|--';
const input2 = '--|_|-|___|--';

const enumerationSymbol = (str) => {
  let result = '';
  for (const item of str) {
    switch (item) {
      case '_':
        result += '0';
        break;
      case '-':
        result += '1';
        break;
    }
  }

  return result;
};

console.log(enumerationSymbol(input1));
console.log(enumerationSymbol(input2));
