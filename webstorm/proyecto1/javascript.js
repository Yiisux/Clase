"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var nombre = 'Jesus';
function saludar(nombre) {
    return "Hola " + nombre;
}
function edadUsuario(edad) {
    return " Tu edad es: " + edad + " años";
}
console.log('Hola ' + nombre + edadUsuario(21));
var a1 = new models_1.Alumno('Jesus', 'Arteaga', 1, 21);
console.log(a1.nombre, a1);
