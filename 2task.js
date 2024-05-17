const input1 = 'test education part 2';
const input2 = 'text';

const formatResult = (string) => {
  const result = string.length > 5 
    ? `${string.slice(0, 3)}${string.slice(-3)}`
    : string[0].repeat(string.length);
      
    return result;
};

console.log(formatResult(input1));
console.log(formatResult(input2));