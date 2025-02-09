const developers = [
  {
    id: 1,
    nombre: 'Juan',
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    proyectos: [
      { id: 1, nombre: 'Proyecto 1' },
      { id: 2, nombre: 'Proyecto 2' }
    ]
  },
  {
    id: 2,
    nombre: 'María',
    habilidades: ['Python', 'SQL', 'Django'],
    proyectos: [
      { id: 3, nombre: 'Proyecto 3' },
      { id: 4, nombre: 'Proyecto 4' }
    ]
  },
  {
    id: 3,
    nombre: 'Pedro',
    habilidades: ['Java', 'Spring', 'Hibernate'],
    proyectos: [
      { id: 5, nombre: 'Proyecto 5' },
      { id: 6, nombre: 'Proyecto 6' }
    ]
  }
];

const desarrolladoresJavascript = developers.filter(developer => (
  developer.habilidades
    .map(habilidad => habilidad.toLowerCase()).includes('javascript')
));

console.log('Desarrolladores con javascript en sus habilidades', desarrolladoresJavascript);

const nombresProyectos = developers.map(developer => (
  developer.proyectos.map(proyecto => proyecto.nombre)
)).flat();
console.log('Proyecto de los desarrolladores', nombresProyectos);
