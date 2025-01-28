console.log('09');

const sum = (operation, ...params) => {
  let result = 0;
  for (const param of params) {
    if (operation === 'suma') result += param;
    else if (operation === 'resta') result -= param;
  }
  return result
};

// console.log(sum('suma',2,3,20,30))
// console.log(sum('resta',2,3,20,30))

const counter = () => {
  let count = 0;

  const increment = () => {
    count = count + 1;
  };

  const log = () => {
    return count;
  };

  return {
    count,
    increment,
    log,
  };
};

const player1Score = counter(); // { increment, mostrarPorPantalla }

player1Score.increment();
player1Score.increment();
player1Score.increment();
console.log(player1Score.count);
const player1Value = player1Score.log();
console.log(player1Value);

const player2Score = counter();

const player2Value = player2Score.log();
console.log(player2Value);

const storeProducts = [
  { id: 'p001', name: 'T-shirt', price: 20, quantity: 2 },
  { id: 'p002', name: 'Cap', price: 5, quantity: 1 },
  { id: 'p003', name: 'Jeans', price: 40, quantity: 1 },
];

const cart = () => {
  let products = [];

  const addProduct = (product) => {
    products = [...products, product];
  };

  const listProducts = () => {
    return products;
  };

  return {
    addProduct,
    listProducts,
  };
};

const user1 = cart();
user1.addProduct(storeProducts[1]);

const user2 = cart();

for (const product of storeProducts) {
  if (product.price <= 20) {
    user2.addProduct(product);
  }
}

console.log(
  user1.listProducts(),
  user2.listProducts(),
);

console.clear();

const operations = (num1, num2, operation = 'suma') => {
  if (operation === 'suma') return num1 + num2;
  else if (operation === 'resta') return num1 - num2;
};

operations(1, 2) // 3
operations(1, 2, 'resta') // -1

const suma = (num1, num2) => num1 + num2;

const resta = (num1, num2) => num1 - num2;

const operationsV2 = (num1, num2, operation) => {
  return operation(num1, num2);
};

let result = operationsV2(1, 5, resta);
result = operationsV2(1, 5, (num1, num2) => num1 - num2);

console.log(result);
