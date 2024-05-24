const transformStringToObject = (string) => {
  let result = {};
  const sortString = string.split('?');
  const params = sortString[1].split('&');

  params.forEach(param => {
    const keyValue = param.split('=');
    const key = keyValue[0];
    const value = keyValue[1];

    result[key] = value;
  });
  
  return result;
}

console.log(transformStringToObject('https://underscorejs.org?a=4&b=8'));
console.log(transformStringToObject('https://underscorejs.org?id=123&limit=5&offset=0'));
