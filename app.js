/*function ordinary1(a,b,c) {
    //implementacion de la funcion
};
const ordinary2 = function (a,b,c) {
    return a + b + c;
};
//ROL DESEMPEÑADO POR LAS FUNCIONES
function add(x,y) {
    return x + y;
}
 console.log(add(x=2,y=3));
const objeto ={metodo1 : add}
console.log(objeto.metodo1(x=4,y=5));
//FUNCIONES FLECHA
const f = function (x,y,z) {
    return x
}

const f1 = (x,y,z) => {return x};

console.log(f(x=1,y=5,z=8));
console.log(f1(x=2));

const fucn1= () => ({a=1});
const fucn2= () => {a=1};
console.log(fucn1(1,5,8));
console.log(fucn2(2));
*/
const sum =(x,y) => x + y;
console.log(sum(x:3, y:6));

function f(x,y:number=5){
    return[x,y];
}
console.log(f(x:1));