"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno = (function () {
    function Alumno(nombre, apellidos, id, edad) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._id = id;
        this._edad = edad;
    }
    Object.defineProperty(Alumno.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alumno.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (value) {
            this._apellidos = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alumno.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alumno.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: true,
        configurable: true
    });
    return Alumno;
}());
exports.Alumno = Alumno;
