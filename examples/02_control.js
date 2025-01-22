console.log('02');
const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const capProductName = 'Cap';
const capProductPrice = 35;
const capProductQuantity = 2;

let message = '';
const sameQuantity = firstProductQuantity === capProductQuantity; // true || false
if (firstProductPrice < capProductPrice) {
  const nota = 'Ejemplo';
  message = `producto ${firstProductName} tiene mejor precio que el ${capProductName}`;
} else if (sameQuantity) {
  message = 'misma cantidad';
} else {
  message = `producto ${firstProductName} es mas caro que el ${capProductName}`;
}

const sameName = firstProductName === capProductName;
if (firstProductPrice < capProductPrice && sameQuantity && !sameName) {
  // console.log('Prueba');
}

message = firstProductPrice < capProductPrice ? `producto ${firstProductName} tiene mejor precio` : `producto ${firstProductName} es mas caro`;

console.log(message);

let day = 'Tuesday';

switch (day) {
  case 'Tuesday':
  case 'Monday':
    console.log('Hay clase de JS');
    break;
  default:
    console.log('No hay clase');
}

if (day === 'Monday' || day === 'Tuesday') {
  console.log('Hay clase de JS');
} else {
  console.log('No hay clase');
}
