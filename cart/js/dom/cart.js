import cart from '../cart.js';

const user1Cart = cart();

const cartForm = document.querySelector("#cart");
const discountForm = document.querySelector("#discount");
const totalContainer = document.querySelector("#total");

const productTemplate = (product) => {
  return `
    <div>
      <h2>Product: ${product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Quantity: ${product.quantity}</p>
      <button data-id="${product.name}">Remove</button>
    </div>
  `;
};

const discountTemplate = (discount) => {
  return `
    <div>
      <h2>${discount.product.name}</h2>
      <p>Original Price: ${discount.product.price}</p>
      <p>Discount: ${discount.discount}%</p>
      <button data-id="${discount.product.name}">Remove discount</button>
    </div>
  `;
};

const totalTemplate = (total) => {
  return `
    <p>Total: ${total}</p>
  `;
};

const renderTotal = (total) => {
  totalContainer.innerHTML = totalTemplate(total);
};

const renderProducts = (products) => {
  const productsElement = document.querySelector("#products");
  const productsHTML = products.map(productTemplate).join('');
  productsElement.innerHTML = productsHTML;
  renderTotal(user1Cart.getTotal());
  // removeProduct listener
  const removeProductButtons = productsElement.querySelectorAll("button");
  removeProductButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      user1Cart.removeProduct(event.target.dataset.id);
      const products = user1Cart.getCart();
      renderProducts(products);
      const discounts = user1Cart.getDiscounts();
      renderDiscounts(discounts);
    });
  });
};

const renderDiscounts = (discounts) => {
  const discountsElement = document.querySelector("#discounts");
  const discountsHTML = discounts.map(discountTemplate).join('');
  discountsElement.innerHTML = discountsHTML;
  // removeDiscount listener
  const removeDiscountButtons = discountsElement.querySelectorAll("button");
  removeDiscountButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      user1Cart.removeDiscount(event.target.dataset.id);
      const products = user1Cart.getCart();
      renderProducts(products);
      const discounts = user1Cart.getDiscounts();
      renderDiscounts(discounts);
    });
  });
};

cartForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(cartForm); // FormData es un objeto que nos permite obtener los datos de un formulario
  const cartData = Object.fromEntries(formData); // Object.fromEntries nos permite convertir un objeto iterable en un objeto. {product: 'tshirt', price: '12', quantity: '12'}
  user1Cart.addToCart(cartData);
  const products = user1Cart.getCart();
  renderProducts(products);
});

const renderDiscountError = (error) => {
  const discountsElement = document.querySelector("#discounts");
  discountsElement.innerHTML = `<p>${error}</p>`;
};

discountForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(discountForm); // FormData es un objeto que nos permite obtener los datos de un formulario
  const discountData = Object.fromEntries(formData); // Object.fromEntries nos permite convertir un objeto iterable en un objeto. {product: 'tshirt', discount: '12'}
  try {
    user1Cart.applyDiscount(discountData.product, discountData.discount);
    const products = user1Cart.getCart();
    renderProducts(products);
    const discounts = user1Cart.getDiscounts();
    renderDiscounts(discounts);
  } catch (error) {
    console.error(error);
    renderDiscountError(error.message);
  }
});
