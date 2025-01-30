const evenOddNumbers = (numbers) => {
  let evenNumbers = [];
  let oddNumbers = [];

  evenNumbers = numbers.filter(number => number % 2 === 0 && number);
  oddNumbers = numbers.filter(number => number % 2 !== 0 && number);
  
  return [
      evenNumbers,
      oddNumbers,
  ]
};

const [even, odd] = evenOddNumbers(numbers);
console.log(even, odd);
