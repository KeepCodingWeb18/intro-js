let selectedProduct = prompt("Ingresa el nombre del producto")
let selectedQuantity = prompt("Ingresa la cantidad")

selectedProduct = selectedProduct.trim().toLowerCase()
selectedQuantity = parseInt(selectedQuantity ?? 0)


let mensaje = ""
if (selectedProduct === "t-shirt" && selectedQuantity >= 2) {
    mensaje = "¡Recibes un 10% de descuento en la segunda camiseta!"
} else if (selectedProduct === "cap" && selectedQuantity >= 3) {
    mensaje =  "¡Obtén una gorra gratis por la compra de 3!"
} else {
    mensaje = "No hay promociones para esta selección"
}

console.log(mensaje)