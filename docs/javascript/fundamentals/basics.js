//Conceptos Básicos de JavaScript

//Variables y Tipos de Datos

/* 
Números: Enteros y decimales.
Cadenas de texto: Secuencias de caracteres.
Booleanos: Verdadero o falso.
Arrays: Colecciones ordenadas de datos.
Objetos: Conjuntos de pares clave-valor. 
*/

let myNumber = 10;
let mystring = "Hello, Reader";
let myBoolean = true;
let myArray = [1, 2, 3];
let myObject = { name: "Camilito", age: 28 };

//Operators

/*
Aritmeéticos: 
Suma (+)
resta (-)
multiplicación (*)
división (/) 
módulo (%)
*/

/*
Comparación: 
Igualdad (==) 
inigualdad (!=)
mayor que (>)
menor que(<)
*/

//Lógica:AND (&&), OR (||), NOT (!)

let sum = 5 + 5;
let comparison = 10 > 5;
let logical = true && false;

//Estructuras de Control

//If-else: Ejecuta código en base a condiciones.
//Bucles o Loops: Repite código múltiples veces (for, while).

let age = 28;

if (age >= 18) {
    console.log("You're of legal age");
} else {
    console.log("You're under age");
}

for (let i = 0; i < 5; i++) {
    console.log("Number: " + i);
}

