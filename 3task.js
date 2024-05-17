const input1 = 'abctestabctext';
const input2 = 'testabctext';

const replaceLetters = (string) => {
  const prefix = string.slice(0, 3) === 'abc' 
    ? `www${string.slice(3)}` 
    : `${string}zzz`;
  
  return prefix;
};

console.log(replaceLetters(input1));
console.log(replaceLetters(input2));