
import {Alumno} from "./models";
let nombre: String = 'Jesus';



function saludar(nombre){
    return "Hola "+nombre;
}

function edadUsuario(edad: number): String{
    return " Tu edad es: "+edad+" años";
}

console.log('Hola '+nombre+ edadUsuario(21));

let a1: Alumno = new Alumno('Jesus', 'Arteaga', 1, 21);

console.log(a1.nombre, a1);