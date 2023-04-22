let cola = [];
cola.push("Juan");
cola.push("Maria");
cola.push("Felipe");
cola.push("Luis");
cola.push("Manuel");
console.log(cola);

// function atenderCola() {
//   cola.shift();
//   console.log(cola);
// }
// setInterval(atenderCola, 5000);
for (let index = 0; index <= cola.length; index++) {
  if (cola.length != 0) {
    function atenderCola() {
      cola.shift();
      console.log(cola);
    }
    setInterval(atenderCola, 5000);
  }
  clearInterval(atenderCola)
  
}