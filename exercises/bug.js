const calcularPromedio = (numeros) => {
  let sumaTotal = 0;
  for (let i = 0; i <= numeros.length; i++) {
  // El error está en ir hasta el numeros.length que en la última posición
  // nos va a dar undefined dando lugar a una suma que da NaN
  // for (let i = 0; i <= numeros.length; i++) {
    sumaTotal += numeros[i];
  }

  const promedio = sumaTotal / numeros.length;
  return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

console.log(promedioNumeros);
