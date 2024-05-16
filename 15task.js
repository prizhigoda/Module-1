const fillArray = (n) => {
  const arr = [];
  let s = "";

  while (arr.length < n) {
    arr.push((s += "x"));
  }

  return arr;
};

console.log(fillArray(12));
