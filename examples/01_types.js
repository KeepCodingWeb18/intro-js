// comentarios
/*
Todo esto seria comentario

en muchas lineas
*/

const product = 'T-shirt';
const quantity = 5;
const secondProduct = 'Cap';
/*
cammelCase
snake_case
PaskalCase
kebab-case
*/

console.log(product);

let secondProductQuantity = 20;

console.log(secondProductQuantity);
secondProductQuantity = 10;

console.log(secondProductQuantity);

let message = 'Hola keepcoding';
message = "Hola keepcoding";
message = 'Hola "Keepcoding"';
// Hola "Keepcoding" intro js
message = 'Hola "keepcoding" intro JS';
message = "I don'tknow";

const template = `
Producto: ${product}
Quantity: ${quantity}
`;
// const noTemplate = '\nProducto:' + product + '\nQuantity: ' + quantity;
console.log(template);
const discount = 2.25;

console.log(typeof discount);
const soldOut = false; // boolean
console.log(typeof soldOut);

let stock = null;
const noProduct = undefined;

console.log(typeof stock, typeof noProduct);
stock = Infinity;
// Symbol

let notANumber = NaN;
console.log(typeof notANumber); // number
notANumber = false;
console.log(typeof notANumber); // boolean

/* Operadores */
const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const capProductName = 'Cap';
const capProductPrice = 35;
const capProductQuantity = 2;
// hoisting en javascript
// var se define como undefined al inicio del script
const suma = firstProductPrice + capProductPrice;
console.log(suma);
const totalFirstProduct = firstProductPrice * firstProductQuantity;

const total = totalFirstProduct + capProductPrice * capProductQuantity;

/// console.log('12' + 12); //1212
/*
modulo
Comparacion
Lógicos
*/
console.clear();

console.log(true + true); // 2
console.log(20 % 2); // 0
console.log(12 == 12); // true
console.log('12' === 12); // false
console.log('12' !== 12); // true
console.log(1 <= 2); // true
console.log(firstProductPrice > capProductPrice); // false
const invalidPrice = NaN;
console.log(isNaN(invalidPrice)); // true

// && AND y 
// || OR o
console.log((firstProductPrice > capProductPrice) || firstProductQuantity === capProductQuantity);
console.log(null === null);
console.log(undefined === undefined);

const thirdProduct = 'Pants', thirdProductPrice = 12, thirdProductQuantity = 1;
/*
const thirdProduct = 'Pants';
const thirdProductPrice = 12;
const thirdProductQuantity = 1;
*/
const isOnline = true;
console.log(!isOnline); // false