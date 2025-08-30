// Declara una variable para tu nombre, tu edad y si te gusta programar.
// Usa console.log() para imprimir cada variable en la consola del navegador.
// Crea una variable para el año de tu nacimiento y otra para el año actual. 
// Usa operadores para calcular tu edad y compárala con la variable que declaraste.

console.log("**** parte uno ****");
let nombre = "Jaime";
let edad = 44;
let programar = true;

console.log("Ni nombre es:", nombre);
console.log("Mi edad es: ", edad, "años");
console.log("Me gusta programar: ", programar);

console.log("**** parte dos ****");

let nacimiento = 1981;
let añoActual = 2025;

let miEdad = añoActual - nacimiento;

let comparar = edad === miEdad;

console.log("Mi edad sera igual a miEdad?: ", comparar);
