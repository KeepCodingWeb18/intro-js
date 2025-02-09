const miInformacion = {
  nombre: "Kevin",
  apellidos: "Martínez",
  modules: [
    {
      name: 'NodeJS',
      date: '2023-02-01',
    },
    {
      name: 'Git',
      date: '2023-02-15',
    },
    {
      name: 'React',
      date: '2023-03-15',
    },
  ],
  busquedaActiva: false,
};

console.log("React inicio:", miInformacion.modules[2].date);
