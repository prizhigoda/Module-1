const input1 = 'abcbacabcbcabcbaba';
const input2 = 'abcbacabcqbcabcbnaba';

const checkSymbol = (str) => {

  return /^[abc]+$/.test(str);
};

console.log(checkSymbol(input1));
console.log(checkSymbol(input2));
