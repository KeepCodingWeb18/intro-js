// solución con callback
function obtenerUsuarioWithCB(id, cb) {
  let usuario;
  setTimeout(() => {
    if (id === 1) {
      usuario = { id: 1, nombre: 'John Doe' };
      cb(null, usuario);
    }
  }, 2000);
}

obtenerUsuarioWithCB(1, (_error, usuario) => {
  console.log('Usuario manejado con callback', usuario);
});

// solución con promesas
const obtenerUsuario = (id) => {
  return new Promise((resolve) => {
    let usuario;
    setTimeout(() => {
      if (id === 1) {
        usuario = { id: 1, nombre: 'John Doe' };
        resolve(usuario);
      }
    }, 2000);
  });
}

obtenerUsuario(1)
  .then(usuario => console.log('Usuario manejado con promesas', usuario))


// async/await
const main = async () => {
  const usuario = await obtenerUsuario(1);
  console.log('Usuario manejado con async/await', usuario)
};

main();