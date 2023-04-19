//let fruits =["Apple","Orange","Plum"];
// console.log(fruits[1]);
// fruits[0]="Pear";
// console.log(fruits);

// console.log(fruits.length);
// fruits[fruits.length]="Grape";
// fruits.push("Banana");
let personas =["Juan","Marta","Eliana","Lorena","Andres"];
//Agregar
personas.push("Eliza");
//medir
console.log(personas.length);
//recortar
console.log(personas.at(-2));
console.log(personas);
console.log(personas[-2]);

let people =["Arle","Juliana","Valentina","Ana"];
people2 =["Diego","Juan"];

copy =[...people,...people2,"Pepe"];
console.log(copy);
copy2 =[...people2];
console.log(copy2);
//iterar
for (let index = 0; index < copy.length; index++) {
    console.log(copy[index]);
}
for (const element of personas.keys()){
    console.log(element);
}
for(const[i,e] of people2.entries()){
    console.log(i,e);
}

const colaBanco =[];
for (let index = 0; index < 20; index++) {
    let nombre =prompt("ingrese su nombre");
    if (nombre != "") {
        colaBanco.push(nombre);
    }else{
        console.log("ingrese otro nombre");
    }
    for (const[i,e] of colaBanco.entries()){
        console.log(i,e);
    }
}


