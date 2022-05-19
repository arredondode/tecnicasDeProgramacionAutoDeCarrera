/*
•En una prueba, un piloto tiene que completar 4
vueltas
•Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
•El programa debe retornar el tiempo total y el
promedio de vuelta
*/

let vuelta1: number = Number(prompt("Ingrese el tiempo de la primera vuelta:"));
let vuelta2: number = Number(prompt("Ingrese el tiempo de la segunda vuelta:"));
let vuelta3: number = Number(prompt("Ingrese el tiempo de la tercera vuelta:"));
let vuelta4: number = Number(prompt("Ingrese el tiempo de la cuarta vuelta:"));
let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;

console.log("El tiempo total es: " + tiempoTotal);
console.log("El promedio de vuelta es: " + tiempoTotal / 4);
