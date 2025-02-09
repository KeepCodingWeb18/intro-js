const input = 10;
// create your function here
const parseNumbers = (number) => {
  return number.toString().split('').join('-');
};

let result = parseNumbers(input); // '1-0'
console.log(result);
const secondInput = 1;
result = parseNumbers(secondInput); // '1'
console.log(result);
const thirdInput = 11234;
result = parseNumbers(thirdInput); // '1-1-2-3-4
console.log(result);
