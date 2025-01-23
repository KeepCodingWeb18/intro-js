console.log('05');
const firstProductName = 'T-shirt';
const capProductName = 'Cap';
              //   0           1               2       3
const products = ['T-shirt', capProductName, 'shoes', 'TV'];
const prices = [1, 2, 3, 40];

// acceso a sus elementos
console.log(products[3].toLowerCase());

console.log(`
  Producto1: ${products[0].toLowerCase()}
  Producto2: ${products[2]}
`);
// añadir a la lista
products.push('PS5');
// products.unshift('PS4');
console.log(products);
// borrar
products.pop(); // borra la PS5
products.shift(); // borra la T-shirt
// modificar su orden
console.log(products.reverse()); //  ['TV', 'shoes', 'Cap']
console.log(products.includes('TV'));
console.log(products.indexOf('PS5'));

const shoesPosition = products.indexOf('shoes'); // 1
products.splice(shoesPosition, 1);
console.log(products);

const csvItem = 'PS5,Switch,Xbox,PC,PSP';
const csvProducts = csvItem.split(',');
csvProducts.pop();
csvProducts.shift();

const newCsvItem = csvProducts.join(',');
console.log(newCsvItem); // 'Switch,Xbox,PC'

/*
!IMPORTANTE
*/
console.clear();
const productsUser1 = ['Tv', 'PC', 'PS5'];
/// ...
let productsUser2 = [...productsUser1];

const addProduct = (newProduct, productList) => {
  const newProductList = [...productList];
  newProductList.push(newProduct);
  return newProductList;
};

productsUser2 = addProduct('Cap', productsUser2);

console.log('2', productsUser2);
console.log('1', productsUser1);

const input = [
  'Downloads',
  'videos',
  'capture',
  'mp4',
];

const input2 = [
  'CodingGame',
  'python',
  'py',
];

const transform = (list) => {
  return list.join('/');
};

console.log(transform(input2));

