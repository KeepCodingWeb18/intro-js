console.log('03');

const value1 = '';

const firstProduct = 'T-shirt';
const firstProductQuantity = 0;

if (firstProduct && firstProductQuantity) {
  console.log('Tenemos camisetas disponibles!!');
} else {
  console.log('No tenemos camisetas');
}

let message = value1 ? 'Existe el value1' : 'No existe';

const streetNumber = 0; // campo variable con prompt por ejemplo

const shopNumber = streetNumber ?? 'No incluido';

// console.log(shopNumber);
const str = 'Hola mundo!    ';
// console.log(str.length);
/// console.log(str.includes('Hola'));

let username = '   KeVin';
let email = ' Kevin@Test.Com    ';

username = username.trim();
username = username.toLowerCase();

email = email.trim().toLowerCase();

if (username === 'kevin' && email === 'kevin@test.com') {
  console.log('Tienes acceso');
} else {
  console.log('No tienes acceso');
}

email = email.replaceAll('e', '-'); // remplaza todas las e por -
console.log(email);

const promptPrice = prompt('Dame un precio de producto');

// const price = parseInt(promptPrice ?? 0);
// const price = Number(promptPrice ?? 0);
const price = +promptPrice ?? 0;
console.log(price);
