/*
Paso 1: Crea un array vacío llamado "numeros"
Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding
Paso 3: Imprime el contenido del array "numeros" en la consola
Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números
Paso 5: Agrega el número 10 al inicio del array "numeros"
Paso 6: Imprime el contenido del array "numeros" en la consola
Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding
Paso 8: Elimina la palabra keepcoding a partir del índice anterior
Paso 9: Imprime el contenido del array "numeros" en la consola
Paso 10: Imprime la longitud del array "numeros" en la consola
*/
//Paso 1
let numeros = [];

//Paso 2
numeros.push(1, 2, 3, "keepcoding", 4, 5);


//Paso 3
console.log(numeros);


//Paso 4
if (numeros.includes("keepcoding")) {
    console.log("Este array no solo tiene numeros");
}

//Paso 5
numeros.unshift(10);

//Paso 6
console.log(numeros);

//Paso 7
console.log(numeros.indexOf("keepcoding"));

//Paso 8
const kcPosition = numeros.indexOf("keepcoding");
numeros.splice(kcPosition, 1);

//Paso 9
console.log(numeros);

//Paso 10
console.log(numeros.length)