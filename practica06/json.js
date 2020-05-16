'use strict'

//object to chain
let obj = {"nombre": "Aren", "Apellido":"Hatake", "curso":4, "horario":["L1500", "X1700"], "Matriculado":true};
let chain = JSON.stringify(obj);

console.log(typeof(chain), chain);
console.log();

//chain to object
let obj2 = JSON.parse(chain);

console.log(typeof(obj2),obj2);
