// Variables

var a; // Se declara la variable a
var b = 'b'; //Se declara y asigna un valor a la variable
b = 'bb'; //Se re-asigna un valor a la variable
var a = 'aa'; // re-declaración de una variable

// GLOBAL SCOPE
var fruit = 'Apple'; //Variable asignada en global scope

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = 'Colombia'; // Es una forma de asignar una variable Global
  console.log(country);
}

countries()
console.log(country);