console.log('07');

const firstProductName = 'T-shirt';
const firstProductQuantity = 12;
const firstProductPrice = 15;

const secondProductName = 'Cap';
const secondProductQuantity = 12;
const secondProductPrice = 12;

const firstProduct = {};
console.log(firstProduct, typeof firstProduct);

firstProduct.name = firstProductName;
firstProduct.quantity = 12;
firstProduct.price = 15;

console.log(firstProduct);

// const id = 12;

const secondProduct = {
  name: secondProductName,
  quantity: secondProductQuantity,
  price: secondProductPrice,
  'country-city': 'ES/Madrid',
  /// [id]: 'test'
};

console.log(secondProduct.name, secondProduct['country-city']);

const getProductInfo = (product, attr) => {
  return product[attr];
};

getProductInfo(secondProduct, 'name');
getProductInfo(secondProduct, 'price');

const thirdProduct = {
  name: 'shoes',
  quantity: 12,
  price: 60,
  sizes: ['S', 'M', 'L'],
  attributes: {
    color: 'red',
    brand: 'nike',
  },
};

console.log(thirdProduct.sizes);
console.log(thirdProduct.attributes.brand);

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

console.log(shows[0].genres[1]);

let ratingTotal = 0;
for (const show of shows) {
  // ratingTotal = ratingTotal + show.rating;
  ratingTotal += show.rating;
}

const renderShow = (show) => {
  return `
   <h2>${show.name}</h2>
   <p>${show.genres.join(', ')}</p>
  `;
};

let template = '';
for (const show of shows) {
  template = template + renderShow(show);
}

const user = {
  email: 'test@test.com',
  role: 'USER',
  app: 'keepcoding',
  modules: ['js', 'html', 'react'],
  test: undefined,
  info: {
    name: 'test',
    surname: 'surname',
  },
};

// 1 JSON.stringify/parse
// const admin = JSON.parse(JSON.stringify(user));
// 2 spread operator
/*
const admin = {
  ...user,
  info: {
    ...user.info,
  },
}; // Object.assign({}, user);
*/
// 3 structuredClone
const admin = structuredClone(user);

admin.email = 'admin@test.com';
admin.role = 'ADMIN';
admin.info.name = 'admin';

delete admin.modules;

console.log(admin, user);
// console.log(JSON.stringify(user, null, 2));


