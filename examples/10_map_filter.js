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
}).map(number => number * 2);

let books = [
  { title: '1984', author: 'George Orwell', year: 1949 },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    year: 1997,
  },
  { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
  { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
  { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
];

const titles2000 = books.filter(({ year }) => year > 2000)
  .map(({ title }) => title)
  .join(', ');

books = books.map(book => {
  if (book.title === 'Twilight') {
    return { ...book, stock: 0 };
  }
  return { ...book, stock: 10 };
});


const setStock = (title, quantity) => {
  const book = books.find(book => book.title === title);
  if (!book) {
    throw new Error('Book not found');
  }
  books = books.map(book => {
    if (book.title === title) {
      return { ...book, stock: quantity };
    }
    return { ...book };
  });
};

try {
  setStock('JS', 100);
} catch (error) {
  console.error(error);
}

const hasStock = books.some((book) => {
  return book.stock === 10;
});

const allStock = books.every((book) => {
  return book.stock === 0;
});

console.log(books);
//  [1, 2, 3, 4, 5];

const total = numbers.reduce((acc, number) => acc + number, 0);
console.log(total);

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
  if (number < 5) lowerThan5ForOf.push(number * 2);
}
