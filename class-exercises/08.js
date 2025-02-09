const books = [
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

let bookList = []
for (const book of books) {
  if (book.year > 2000) {
      bookList = [...bookList, book.title]
  }
}
console.log(bookList.join(', '))

const bookList2 = books
.filter(book => book.year > 2000)
.map(book => book.title).join(', ')

console.log(bookList2)