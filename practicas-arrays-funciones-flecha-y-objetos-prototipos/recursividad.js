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
/*
Ejercicio 2:
El software que se desarrollará controlará un cajero automático (ATM) a través de una 
simulación usando el lenguaje de programación JavaScript.
• El cajero automático atenderá a un cliente a la vez. Se le pedirá al cliente 
que inserte su documento de identidad y su pin de 4 dígitos, los cuales se 
enviarán al banco para su validación como parte de cada transacción. El 
cliente podrá entonces realizar una o más transacciones. El menú se 
mostrará en la consola hasta que el cliente indique que no desea realizar 
más transacciones.
• El cajero automático debe ser capaz de proporcionar los siguientes servicios 
al cliente:
• Un cliente debe poder realizar un retiro de efectivo de cualquier cuenta 
adecuada vinculada al documento de identidad, en múltiplos de $50000. Se 
debe obtener la aprobación del banco antes de entregar efectivo.
• Un cliente debe poder realizar un depósito en cualquier cuenta vinculada al 
documento de identidad, consistente en efectivo y/o cheques. El cliente 
ingresará el monto del depósito en el cajero automático e indicar si es 
efectivo o cheque.
• Un cliente debe poder realizar una transferencia de dinero entre dos 
cuentas cualesquiera vinculadas a al documento de identidad. 
• Un cliente debe poder realizar una consulta de saldo de cualquier cuenta 
vinculada al documento de identidad.
• El cajero automático comunicará al cliente los resultados de cada 
transacción dependiendo de su tipo. Ejemplo “retiro exitoso, puede tomar x 
dinero de la bandeja principal”
• Si el banco determina que el PIN del cliente no es válido, se le pedirá al 
cliente que vuelva a ingresar el PIN antes de que se pueda continuar con la 
transacción. Si el cliente no puede ingresar correctamente el PIN después 
de tres intentos saldrá de la aplicación. 
• El cajero automático tendrá un panel de operador con un interruptor que 
permitirá apagar o encender el cajero
*/
const clientes = [
  {
    documento: "123456",
    pin: "1234",
    cuentas: [
      {
        tipo: "corriente",
        saldo: 500000
      },
      {
        tipo: "ahorros",
        saldo: 500000
      }
    ]
  },
  {
    documento: "789012",
    pin: "5678",
    cuentas: [
      {
        tipo: "corriente",
        saldo: 850000
      },
      {
        tipo: "ahorros",
        saldo: 550000
      }
    ]
  }
];

function buscarCliente(documento) {
  return clientes.find(cliente => cliente.documento === documento);
};

function validarPin(cliente, pin) {
  return cliente.pin === pin;
};

function obtenerCuenta(cliente, tipo) {
  return cliente.cuentas.find(cuenta => cuenta.tipo === tipo);
};

function validarRetiro(cuenta, monto) {
  return monto % 50000 === 0 && monto <= cuenta.saldo;
};

function menuPrincipal() {
  const documento = prompt("Ingrese su documento de identidad");
  const cliente = buscarCliente(documento);

  if (!cliente) {
    console.log("Cliente no encontrado");
    return;
  }

  let intentos = 3;
  while (intentos > 0) {
    const pin = prompt("Ingrese su PIN");
    if (validarPin(cliente, pin)) {
      menuCliente(cliente);
      return;
    } else {
      intentos--;
      console.log(`PIN incorrecto. Le quedan ${intentos} intentos.`);
    }
  }

  console.log("Demasiados intentos fallidos. Saliendo del programa.");
};

/*
Desarrollar en javascript  un programa para la gestión de reservas de un hotel, el cual, debe tener las siguientes 
 características y consideraciones: • Un cliente puede reservar cualquier tipo de habitación:
  individual, doble y familiar • Las habitaciones pueden ser para fumadores o no fumadores. • 
  Las mascotas solo se aceptan en habitaciones familiares. • El hotel cuenta con 3 habitaciones 
  de cada tipo. • No se puede exceder el número de personas por habitación: individual 2 personas, 4
   personas para doble y 6 personas para familiar. • El hotel necesita una estadística de las reservas: 
   nombre de quien reserva, país de origen, número de personas, el período de la estadía, número 
   de personas que están ocupando el hotel y si el huésped trajo mascota.
   */
let habitacionesDisponibles = [
  { tipo: "individual", fumadores: false, capacidadMaxima: 2, ocupantes: [], tieneMascota: false },
  { tipo: "individual", fumadores: false, capacidadMaxima: 2, ocupantes: [], tieneMascota: false },
  { tipo: "individual", fumadores: false, capacidadMaxima: 2, ocupantes: [], tieneMascota: false },
  { tipo: "doble", fumadores: true, capacidadMaxima: 4, ocupantes: [], tieneMascota: false },
  { tipo: "doble", fumadores: true, capacidadMaxima: 4, ocupantes: [], tieneMascota: false },
  { tipo: "doble", fumadores: true, capacidadMaxima: 4, ocupantes: [], tieneMascota: false },
  { tipo: "familiar", fumadores: false, capacidadMaxima: 6, ocupantes: [], tieneMascota: true },
  { tipo: "familiar", fumadores: false, capacidadMaxima: 6, ocupantes: [], tieneMascota: true },
  { tipo: "familiar", fumadores: false, capacidadMaxima: 6, ocupantes: [], tieneMascota: true }
];


let reservas = [];

function agregarReserva(nombre, pais, tipoHabitacion, fumadores, numPersonas, fechaInicio, fechaFin, trajoMascota) {

  let habitacion = habitacionesDisponibles.find(habitacion =>
    habitacion.tipo === tipoHabitacion &&
    habitacion.fumadores === fumadores &&
    habitacion.capacidadMaxima >= numPersonas &&
    (habitacion.tieneMascota || !trajoMascota) &&
    habitacion.estaDisponible()
  );


  if (habitacion) {
    habitacion.agregarOcupante(nombre);
    reservas.push({
      nombre: nombre,
      pais: pais,
      tipoHabitacion: tipoHabitacion,
      fumadores: fumadores,
      numPersonas: numPersonas,
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
      trajoMascota: trajoMascota
    });
    console.log("Reserva agregada exitosamente.");
  } else {
    console.log("No se pudo agregar la reserva.");
  }
}

function calcularPersonasOcupandoHotel() {
  let personasOcupando = 0;
  for (let i = 0; i < habitacionesDisponibles.length; i++) {
    personasOcupando += habitacionesDisponibles[i].ocupantes.length;
  }
  return personasOcupando;
}


agregarReserva("Juan Pérez", "Argentina", "individual", false, 1, new Date(2023, 6, 1), new Date(2023, 6, 7), false);

