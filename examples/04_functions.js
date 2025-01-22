const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const capProductName = 'Cap';
const capProductPrice = 35;
const capProductQuantity = 2;

const firstProductTotalPrice = firstProductPrice * firstProductQuantity;
const secondProductTotalPrice = capProductPrice * capProductQuantity;

// funciones
console.log('Hola');
/*
1. definicion
2. Lo que retorna (opcional)
3. parametros
*/

function saludo() {
  console.log('Hello');
}

// greeting();
// arrow function
const greeting = () => {
  console.log('Hello');
};

// saludo();

const calc = (price, quantity) => {
  const result = price * quantity;
  return result;
};

const calcOneLine = (price = 0, quantity = 0) => (
  price * quantity
);

const resultFirstProduct = calc(firstProductPrice, firstProductQuantity);
const resultSecondProduct = calc(capProductPrice, capProductQuantity);
const resultNoProduct = calcOneLine();

const offers = (product = '', quantity = 0) => {
  let msg = "";
  if (!product) {
    throw new Error('Producto no valido');
  }
  product = product.toLowerCase().trim();

  if (product === "t-shirt" && quantity >= 2) {
    msg = "¡Recibes un 10% de descuento en la segunda camiseta!";
  } else if (product === "cap" && quantity >= 3) {
    msg = "¡Obtén una gorra gratis por la compra de 3!";
  } else {
    msg = "No hay promociones para esta selección";
  }

  return msg;
};

const result = offers()
console.log(result);