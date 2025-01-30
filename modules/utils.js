export const calculadora = () => {
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

export const variable = 'hola';

const utilFile = 'name';

export default utilFile;

// module.exports = utilFile;
