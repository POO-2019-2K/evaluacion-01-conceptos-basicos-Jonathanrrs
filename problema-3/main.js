import Casa from "./Casa.js";

let c1 = new Casa("100,000", "200", "3", "2");

c1.imprimir();

console.log(c1.precio);
console.log(c1.superficie);

c1.numHab = "Nuevas habitaciones:" + " " + "4";
console.log(c1.numHab);

c1.numBaños = "Nuevos baños:" + " " + "3";
console.log(c1.numBaños);

c1.imprimir();