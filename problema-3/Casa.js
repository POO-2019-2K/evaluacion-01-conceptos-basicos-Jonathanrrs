export default class Casa {
    constructor(precio, superficie, numHab, numBaños) {
        this._precio = precio;
        this._superficie = superficie;
        this._numHab = numHab;
        this._numBaños = numBaños;
    }

    imprimir() {
        console.log(`${this._precio}, ${this._superficie}, ${this._numHab}, ${this._numBaños}`);
    }

    get precio() {
        return this._precio;
    }

    get superficie() {
        return this._superficie;
    }

    get numHab() {
        return this._numHab;
    }

    get numBaños() {
        return this._numBaños;
    }

    set numHab(numHab) {
        this._numHab = numHab;
    }

    set numBaños(numBaños) {
        this._numBaños = numBaños;
    }

    
}