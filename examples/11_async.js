console.log('11');

console.log('Hola');
/*
setTimeout(() => {
  console.log('keepcoding!');
}, 1000);
*/
/// callback

const getProducts = (cb) => {
  setTimeout(() => {
    const products = [{ name: 'T-shirt', price: 12 }];
    cb(null, products);
  }, 2000);
};

const getProduct = (name, cb) => {
  setTimeout(() => {
    const product = { name: 'T-shirt', price: 12, stock: null };
    cb(null, product);
  }, 5000);
};



const getProductsP = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [{ name: 'T-shirt', price: 12 }];
      resolve(products);
    }, 2000);
  });
};
const getProductP = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = { name: 'T-shirt', price: 12, stock: null };
      resolve(product);
    }, 5000);
  });
};

getProducts((error, products) => {
  if (error) {
    console.log('Hay error con los productos');
  } else {
    getProduct(products[0].name, (error, product) => {
      if (error) {
        console.log('Error detalle producto');
      } else {
        console.log(product);
      }
    })
  }
});

// promesas
getProducstP()
  .then(products => getProductP(products[0].name))
  .then(detail => {
    console.log(detail);
  }).catch(error => {
    console.log(error);
  });

// async/await
const main = async () => {
  try {
    const produtcs = await getProducstP();
    const detail = await getProductP(produtcs[0].name);
    console.log(detail);
  } catch (error) {
    console.log(error);
  }
};

main();
