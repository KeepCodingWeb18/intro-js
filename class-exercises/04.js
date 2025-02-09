const getPromo = (name, quantity = 0) => {
  let message = '';
  if (name === 'T-shirt' && quantity >= 2) {
      message = '¡Recibes un 10% de descuento en la segunda camiseta!';
  } else if (name === 'Cap' && quantity >= 3) {
      message = '¡Obtén una gorra gratis por la compra de 3!';
  } else {
      message = 'No hay promociones para esta selección';
  }

  return message;
}

const result = getPromo('Cap', 12);
console.log(result);