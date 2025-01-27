console.log('08');


const { year, author, rating: { rottenTomatoes } } = {
  title: 'Twilight',
  author: 'Stephenie Meyer',
  year: 2005,
  rating: {
    rottenTomatoes: 6,
    filmaffinity: 6,
  },
};

console.log(year, author, rottenTomatoes);

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

const books2000 = (books) => {
  let titles = [];
  for (const { year, title } of books) {
    if (year > 2000) titles = [...titles, title];
  }
  return titles.join(', ');
}


const shows = [
  {
    id: 1,
    name: 'Under the dome',
    genres: ['Drama', 'Science-Fiction'],
    rating: 2,
  },
  {
    id: 2,
    name: 'Game of thrones',
    genres: ['Drama'],
    rating: 8,
  },
  {
    id: 3,
    name: 'Friends',
    genres: ['Comedy'],
    rating: 6,
  },
];

const renderShow = ({ name, genres }) => {
  return `
   <h2>${name}</h2>
   <p>${genres.join(', ')}</p>
  `;
};

const useState = () => {
  return ['example', 12];
};

const getAdminUser = () => {
  return { name: 'admin', role: 'ADMIN', email: 'test@admin.com' };
};

const [key, value] = useState(); // ['example', 12];
const { role } = getAdminUser(); // { name: 'admin', role: 'ADMIN', email: 'test@admin.com' };

console.log(books2000(books));

const csvProducts = 'T-shirt,10,Amazon\nCap,5,Google\nPants,15,Amazon\nShoes,20,Google';

const processCSV = (csv) => { // 'T-shirt,10,Amazon\nCap,5,Google\nPants,15,Amazon\nShoes,20,Google';
  let products = [];
  const lines = csv.split('\n'); // ['T-shirt,10,Amazon', 'Cap,5,Google', 'Pants,15,Amazon', 'Shoes,20,Google']
  for (const line of lines) { // 'T-shirt,10,Amazon'
    const [name, price, store] = line.split(','); // ['T-shirt','10','Amazon']
    products = [...products, {
      // name: name,
      name,
      price: parseInt(price),
      // store: store,
      store,
    }];
  }
  return products;
};

const productos = processCSV(csvProducts);
console.log(productos);

const infoGeneral = {
  bootcamp: 'Keepcoding',
  edicion: 'web18',
  name: 'General',
};

const module1 = {
  ...infoGeneral,
  name: 'JS',
};

const module2 = {
  ...infoGeneral,
  name: 'HTML',
};

const { edicion, ...module3 } = { ...infoGeneral, name: 'Modelo de datos' };

// delete module3.edicion;
console.log(module1, module2, module3);
