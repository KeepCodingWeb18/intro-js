/*
const product = {
  name: '',
  price: 1,
  quantity: 2,
};

const products = [
{
  name: '',
  price: 1,
  quantity: 2,
}
];

const discounts = [
  {
    discount: 20,
    product: {
      name: '',
      price: 1,
      quantity: 2,
    }
  }
]
*/
const cart = () => {
  // products = [{ name: 'T-shirt', price: 20, quantity: 2 }, { name: 'Cap', price: 5, quantity: 3 }];
  /**
   * Array of product objects in the cart.
   * @type {Product[]}
   */
  let products = [];
  // discounts = [{ product: { name: 'T-shirt', price: 20, quantity: 2 }, discount: 10 }];
  /**
   * Array of discount objects applied to products.
   * @type {Discount[]}
   */
  let discounts = [];
  
  /**
   * Adds a product to the product list
   * @param {Product} product - The product to add to the product list
   */
  const addToCart = (product) => {
    products = [...products, product];
  };

  /**
   * Gets the list of products in the cart.
   * @returns {Product[]} The list of products in the cart.
   */
  const getCart = () => {
    return products;
  };

  /**
   * Gets the list of discounts applied to the cart.
   * @returns {Discount[]} The list of discounts applied to the cart.
   */
  const getDiscounts = () => {
    return discounts;
  };

  /**
   * Get the total price of the products in the cart.
   * @returns {number} The total price of the products in the cart.
   */
  const getTotal = () => {
    // let total = 0;
    // for (const product of products) {
    //  total = total + (product.price * product.quantity);
    // }
    return products.reduce((acum, product) => (
      acum + product.price * product.quantity
    ), 0);
    // return total;
  };

  /**
   * Applies a discount to a product in the cart.
   * @param {string} productName - The name of the product to apply the discount to.
   * @param {string} discount - The discount percentage to apply.
   * @throws {Error} If the product is not found in the product list.
   */
  const applyDiscount = (productName, discount) => {
    const product = products.find(({ name }) => name === productName);
    if (!product) {
      throw new Error('Product not found');
    }
    // añadir descuento
    discounts = [
      ...discounts,
      {
        discount: parseInt(discount),
        product: { ...product },
      }
    ];
    // actualizar el precio
    products = products.map((productElement) => {
      if (productElement.name === productName) {
        // aplico descuento
        const discountNumber = parseInt(discount);
        const priceDiscount = productElement.price * (discountNumber / 100);
        const price = productElement.price - priceDiscount;
        return {
          ...productElement,
          price,
        };
      } else {
        return productElement;
      }
    });
  };

  /**
   * Removes a product from the cart and any discounts associated with it.
   * @param {string} productName - The name of the product to remove.
   */
  const removeProduct = (productName) => {
  };

  /**
   * Removes a discount applied to a product in the cart.
   * @param {string} productName - The name of the product to remove the discount from.
   */
  const removeDiscount = (productName) => {
  };

  return { addToCart, getCart, applyDiscount, getDiscounts, removeDiscount, removeProduct, getTotal };
};

const micart = cart();

micart.addToCart({
  name: 'cap',
  price: 2,
  quantity: 10,
});

console.log(micart.getCart());
console.log(micart.getDiscounts());
console.log(micart.getTotal());
try {
  micart.applyDiscount('No existe', 12);
} catch (error) {
  console.log(error);
}
micart.applyDiscount('cap', 10);
console.log(micart.getDiscounts());
console.log(micart.getTotal());

export default cart;
