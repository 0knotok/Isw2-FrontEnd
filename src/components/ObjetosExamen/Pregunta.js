class Pregunta {
    constructor(tipo, clase, pregunta){
        this._tipo = tipo;
        this._clase = clase;
        this._pregunta = pregunta;
    }

    get gettipo() {
        return this._tipo;
    }

    get getclase() {
        return this._clase;
    }

    get getpregunta(){
        return this._pregunta;
    }

    set setpregunta(pregunta){
        this._pregunta = pregunta;
    }

    verPregunta() {
        return (
            <div>
                <p>{this._pregunta}</p>
            </div>
        )
    }

}

export default Pregunta;