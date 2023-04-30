// Ejercicio 1:
// Construya un algoritmo con JavaScript” para las estadísticas de atención de una
// universidad teniendo en cuenta los siguientes requisitos:
// 1. Hay dos módulos de atención: terminal para llamada telefonica y oficina.
// 2. El sistema brinda las estadísticas de todo el proceso de atención:
//  Cantidad de usuarios atendidos.
//  Atendidos por día y especificación por segmento (Estudiante – docente) en
// cada uno de los módulos de atención.
//  Se permite trasferir de módulo de atención y se debe generar estadística de
// esta trasferencia.
let atención=[
  {
    nombre:'Juan',
    tipo:'Estudiante',
    dia:29,
    modulo:'oficina'
  },
  {
    nombre:'Maria',
    tipo:'Estudiante',
    dia:29,
    modulo:'telefono'
  },
  {
    nombre:'Oscar',
    tipo:'Docente',
    dia:30,
    modulo:'oficina'
  },{
    nombre:'Juan',
    tipo:'Docente',
    dia:30,
    modulo:'telefono'
  }
];
function filtrarPorDiaYTipo(obj) {
  if (obj.dia === 29 && obj.tipo === 'Estudiante') {
    return true;
  } else {
    return false;
  }
};
let diaYTipo= atención.filter(filtrarPorDiaYTipo);
console.log(diaYTipo);

function filtrarPorDiaYTipoDocente(obj) {
  if (obj.dia === 30 && obj.tipo === 'Docente') {
    return true;
  } else {
    return false;
  }
};
let diaYTipoDocente= atención.filter(filtrarPorDiaYTipoDocente);
console.log(diaYTipoDocente);

function filtrarPorModulo(obj) {
  if (obj.modulo == 'oficina') {
    return true;
  } else {
    return false;
  }
};
let atendidosOficina = atención.filter(filtrarPorModulo);
console.log(atendidosOficina.length);

function transferencia(obj,nombre,modulo) {
  if(obj.nombre == nombre){
    obj.modulo = modulo;
  }
}

transferencia(atención,'juan','telefono');
console.log(atención);
