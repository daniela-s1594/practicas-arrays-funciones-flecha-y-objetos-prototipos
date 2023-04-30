/*
let personas = ["Juan", "Marta", "Eliana", "Lorena", "Andres"];
//Agregar
personas.push("Eliza");
//medir
console.log(personas.length);
//recortar
console.log(personas.at(-2));
console.log(personas);
console.log(personas[-2]);

let people = ["Arle", "Juliana", "Valentina", "Ana"];
people2 = ["Diego", "Juan"];

copy = [...people, ...people2, "Pepe"];
console.log(copy);
copy2 = [...people2];
console.log(copy2);

//iterar
for (let index = 0; index < copy.length; index++) {
  console.log(copy[index]);
}
for (const element of personas.keys()) {
  console.log(element);
}
for (const [i, e] of people2.entries()) {
  console.log(i, e);
}
*/
let cola = [];
cola.push("Juan");
cola.push("Maria");
cola.push("Felipe");
cola.push("Luis");
cola.push("Manuel");
console.log(cola);

function atenderCola() {
  cola.shift();
  console.log(cola);
}
setInterval(atenderCola, 5000);
// clearInterval();Para detener la iteracion 
