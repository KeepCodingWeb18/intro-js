const calculadora = () => {
  let resultado = 0;

  const sumar = (valor) => {
      resultado += valor;
  }

  const restar = (valor) => {
      resultado -= valor;
  }

  const multiplicar = (valor) => {
      resultado *= valor;
  }

  const dividir = (valor) => {
      if (valor === 0) console.error("No se puede dividir por")
      resultado /= valor;
  }

  const total = () => {
      return resultado;
  }

  return {sumar, restar, multiplicar, dividir, total}
}

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16
