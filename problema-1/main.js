import Factura from "./Factura.js";

let f1 = new Factura("19/02/2019", "5000", "12345");

f1.imprimir();

console.log(f1.FechaFactura);
console.log(f1.TotalFactura);
console.log(f1.NumFactura);

f1.NumFactura = "Nuevo numero" + " " + "1234555";
console.log(f1.NumFactura);
f1.imprimir()

