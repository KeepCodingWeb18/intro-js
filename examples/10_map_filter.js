console.log('10');

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((value, index) => {
  // console.log(value, index);
});

const forEach = (list, cb) => {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    cb(element, index);
  }
};

forEach(numbers, (value, index) => {
  // console.log(value, index);
});

// map filter
const double = numbers.map(number => (
  number < 5
));

const lowerThan5 = numbers.filter(number => {
  return number < 5;
});

console.log(lowerThan5, numbers);

/*
for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  console.log(number);
}
*/
const doubleForOf = [];
const lowerThan5ForOf = [];
for (const number of numbers) {
  doubleForOf.push(number * 2);
  if (number < 5) lowerThan5ForOf.push(number);
}
