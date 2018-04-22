// Variables

let l = 2; // esta es una variable de tipo numero
let m = "Cinta Blanca"; // esta es una variable de tipo string

// Operadores matematicos
// +, -, *, /, %, (), **

// Operadores de comparacion
// ==, !=, <, >, <=, >=

// Esta es una funcion de JS y su alcance solo existe dentro de ella.
function SumarNumeros(x,y) { // la funcion recibe 2 parametros.
  // console.log nos sirve para imprimir en la consola
  console.log(typeof(x));
  console.log(typeof(y));
  console.log(x+y);
};

// Para llamar una funcion de JS, usamos su nombre junto a parentesis y si la funcion recibe parametros, se los mandamos separando cada uno con una ",".
SumarNumeros(l,m);