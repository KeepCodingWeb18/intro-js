console.log('09');

const sum = (operation, ...params) => {
  let result = 0;
  for (const param of params) {
    if (operation === 'suma') result += param;
    else if (operation === 'resta') result -= param;
  }
  return result
};

console.log(sum('suma',2,3,20,30))
console.log(sum('resta',2,3,20,30))
