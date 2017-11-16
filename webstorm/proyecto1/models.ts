export class Alumno{

    private _nombre: String;
    private _apellidos: String;
    private _id: number;
    private _edad: number;


    constructor(nombre: String, apellidos: String, id: number, edad: number) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._id = id;
        this._edad = edad;
    }


    set nombre(value: String) {
        this._nombre = value;
    }

    set apellidos(value: String) {
        this._apellidos = value;
    }

    set id(value: number) {
        this._id = value;
    }

    set edad(value: number) {
        this._edad = value;
    }

    get nombre(): String {
        return this._nombre;
    }

    get apellidos(): String {
        return this._apellidos;
    }

    get id(): number {
        return this._id;
    }

    get edad(): number {
        return this._edad;
    }
}

