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

const numbers = [1, 2, 3, 4, 5];
let doubleNumbers = [];
for (const number of numbers) {
  doubleNumbers = [...doubleNumbers, number * 2];
  doubleNumbers.push(number * 2);
}

console.log(doubleNumbers);

console.log('End script');
