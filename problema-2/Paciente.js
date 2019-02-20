export default class Paciente {
    constructor(fechaNac, estatura, peso) {
        this._fechaNac = this._getStringAsDate(fechaNac);
        this._estatura = estatura;
        this._peso = peso;
    }

    imprimir() {
        console.log(`${this._fechaNac}, ${this._estatura}, ${this._peso}`);
    }

    get fechaNac() {
        return this._fechaNac;
    }

    get estatura() {
        return this._estatura;
    }

    get peso() {
        return this._peso;
    }

    set fechaNac(fechaNac) {
        this._fechaNac = fechaNac;
    }

    set estatura(estatura) {
        this._estatura = estatura;
    }

    set peso(peso) {
        this._peso = peso;
    }

    getStringAsDate(Fecha) {
        let partes = Fecha.split("/");
        let dfecha = new Date(partes[2], partes[1]-1, partes[0]);
        return dfecha;
    }
}