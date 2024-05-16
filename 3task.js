const input1 = 'abctestabctext';
const input2 = 'testabctext';

const replaceLetters = (string) => {
  const prefix = string.slice(0, 3) === "abc" ? "www" : string;
  const suffix = string.slice(0, 3) === "abc" ? string.slice(3) : "zzz";
  
  return `${prefix}${suffix}`;
};

console.log(replaceLetters(input1));
console.log(replaceLetters(input2));