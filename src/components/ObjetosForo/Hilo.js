class Hilo {
    constructor(tipo, mensaje, archivo){
        this._tipo = tipo;
        this._mensaje = mensaje;
        this._archivo = archivo;
    }

    get gettipo() {
        return this._tipo;
    }

    get getmensaje() {
        return this._mensaje;
    }

    get getarchivo() {
        return this._archivo;
    }

    set settipo(tipo) {
        this._tipo = tipo;
    }

    set setmensaje(mensaje) {
        this._mensaje = mensaje;
    }

    set setarchivo(archivo) {
        this._archivo = archivo;
    }

    verMensaje() {
        return (
            <div>
                <p>{this._mensaje}</p>
            </div>
        )
    }

}

export default Hilo;