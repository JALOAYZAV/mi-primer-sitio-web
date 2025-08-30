// Ejercicio de Funciones en JavaScript
// Día 2 de tu camino como Desarrollador Web

console.log("--- Ejercicio 1: Función de Saludo ---");
// Crea una función que acepte un nombre como parámetro y lo imprima en la consola.
// Luego, llama a esa función con tu propio nombre.
// Pista: Usa 'console.log()' dentro de la función.

// Escribe tu código aquí abajo:
function saludo(nombre){
    console.log("Buen dia, minombre es: ",nombre);
}

saludo("Jaime");

console.log("\n--- Ejercicio 2: Función de Suma ---");
// Crea una función que acepte dos números como parámetros y devuelva su suma.
// Luego, llama a la función y guarda el resultado en una variable.
// Finalmente, imprime el resultado en la consola.
// Pista: Usa la palabra clave 'return'.

// Escribe tu código aquí abajo:
function sumar(num1, num2){
    return num1 + num2;
}

let resultado = sumar(2, 4);
console.log("El resultado calculado es:",resultado);

console.log("\n--- Ejercicio 3: Función de Edad ---");
// Basado en el ejercicio de ayer, crea una función que calcule la edad.
// La función debe aceptar el año de nacimiento y el año actual.
// Debe devolver la edad calculada.

// Escribe tu código aquí abajo:
function calcularEdad(nacimiento, añoActual){
    
    return añoActual - nacimiento;
}

let calculoDeEdad = calcularEdad(1981, 2025);
console.log("La edad calculada es: ", calculoDeEdad);

