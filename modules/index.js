// ESModules
import
  utilFile, { calculadora, variable as variableAlias }
from './utils.js';
import * as utils from './utils.js';

console.log(utils.variable);

// commonJS -> nodejs
// const utilFile = require('./utils.js');

console.log(utilFile, variableAlias);

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16 
