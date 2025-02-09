const input1 = 'string';
// create your function here
const lengthAndReverseString = (input) => {
  const reversed = input.split('').reverse().join('');
  return `${input.length} ${reversed}`;
};

let result = lengthAndReverseString(input1); // '6 gnirts'
console.log(result);

const input2 = 'variable';
result = lengthAndReverseString(input2); // '8 elbairav'
console.log(result);

const input3 = 'pointer';
result = lengthAndReverseString(input3); // '7 retniop'
console.log(result);

