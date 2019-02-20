import Paciente from "./Paciente.js";

let p1 = new Paciente("11/10/1999", "1.72", "63");

p1.imprimir();

console.log(p1._fechaNac);
console.log(p1.estatura);

p1.fechaNac = "Nueva fecha:" + " " + "12/10/1999";
console.log(p1.fechaNac);

p1.estatura = "Nueva estatura:" + " " + "1.73";
console.log(p1.estatura);

p1.peso = "Nuevo peso:" + " " + "64";
console.log(p1.peso);

p1.imprimir();