export default class Factura {
    constructor(fechaFactura, totalFactura, numFactura) {
        this._fechaFactura = this._getStringAsDate(fechaFactura);;
        this._totalFactura = totalFactura;
        this._numFactura = numFactura;
    }

    imprimir() {
        console.log(`${this._fechaFactura}, ${this._totalFactura}, ${this._numFactura}`);
}

    get fechaFactura() {
        return this._fechaFactura;
    }

    get totalFactura() {
        return this._totalFactura;
    }

    get numFactura() {
        return this._numFactura;
    }

    set numFactura(numFactura) {
        this._numFactura = numFactura;
    }

    getStringAsDate(Fecha) {
        let partes = Fecha.split("/");
        let dfecha = new Date(partes[2], partes[1]-1, partes[0]);
        return dfecha;
    }


}