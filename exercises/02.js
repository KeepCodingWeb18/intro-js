const selectedProduct = prompt('Ingresa el nombre del producto');
const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));

let message = "";

if (selectedProduct === "T-shirt" && selectedQuantity >= 2) {
    message = "¡Recibes un 10% de descuento en la segunda camiseta!";
} else if (selectedProduct === "Cap" && selectedQuantity >= 3) {
    message = "¡Obtén una gorra gratis por la compra de 3!";
} else {
    message = "No hay promociones para esta selección";
}

console.log(message)