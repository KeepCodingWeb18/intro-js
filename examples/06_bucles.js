console.log('06');
const products = ['Cap', 'T-shirt', 'Shoes', 'TV'];
const showProduct = (product) => {
  console.log(`Producto: ${product}`);
};
/*
for(), while(), do while()
*/
/*    
for (let index = 0; index < 10; index = index + 1) {
  console.log('Dentro del for');
}
*/
for (let index = 0; index < products.length; index++) {
  const product = products[index];
  showProduct(product);
}

let counter = 0;
while (counter < 10) {
  console.log('Dentro del while');
  if (counter > 5) {
    counter = counter + 2;
  } else {
    counter = counter + 1;
    // counter++
    // counter += 1
    // counter =+ 1 -> counter = 1 + counter;
  }
}

for (const product of products) {
  console.log(product);
}

const data1 = ['test', 'test1'];
const data2 = ['data', 'info'];

const mergeInfo = [...data1, ...data2]; // ['test', 'test1', 'data', 'info']


const numbers = [1, 2, 3, 4, 5];
let doubleNumbers = [];
/*
doubleNumbers = [...doubleNumbers, 1 * 2]; // [2]
doubleNumbers = [...doubleNumbers, 5 * 2]; // [2, 10]
doubleNumbers = [...doubleNumbers, 10 * 2]; // [2, 10, 20]
*/
for (const number of numbers) {
  doubleNumbers = [...doubleNumbers, number * 2];
  // doubleNumbers.push(number * 2);
}
console.log(doubleNumbers);

const users = [
  'user1@keepcoding.com',
  'user2@discord.com',
  'user3@keepcoding.com',
];
let hideEmailsKeepcoding = [];
let keepcodingUsers = [];

for (const user of users) {
  if (user.includes('@keepcoding')) {
    keepcodingUsers = [...keepcodingUsers, user];
    hideEmailsKeepcoding = [...hideEmailsKeepcoding, user.replace('@keepcoding.com', '****')];
  } else {
    hideEmailsKeepcoding = [...hideEmailsKeepcoding, user];
  }
}

console.log(hideEmailsKeepcoding, keepcodingUsers);

console.log('End script');

console.clear();

const productsDisponiblesPromo = [
  [ // promo1
    'T-shirt', // producto
    2, // cantidad
    'Descuento del 10%' // mensaje
  ],
  [ // promo2
    'Cap', // producto
    3, // cantidad
    'Tercera gorra gratis' // mensaje
  ]
];
const promo1 = productsDisponiblesPromo[0]; /// ['T-shirt', 2,'Descuento del 10%']

console.log(promo1[2]); // Descuento del 10%

console.log(productsDisponiblesPromo[0][2]);

const data = [
  ['PSP', 'TV'], // user 1
  ['Cap', 'T-shirt'], // user 2
  ['TV', 'iPhone'], // user 3
];

let message = '';

for (const userProducts of data) {
  message = `${message}Productos:`;
  for (const product of userProducts) {
    message = `${message} ${product} `;
  }
  message = `${message}\n`;
}

console.log(message);
