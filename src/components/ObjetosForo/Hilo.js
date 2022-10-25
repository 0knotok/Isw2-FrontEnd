class Hilo {
    constructor(tipo, mensaje){
        this._tipo = tipo;
        this._mensaje = mensaje;
    }

    get gettipo() {
        return this._tipo;
    }

    get getmensaje() {
        return this._mensaje;
    }

    set setmensaje(mensaje) {
        this._mensaje = mensaje;
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