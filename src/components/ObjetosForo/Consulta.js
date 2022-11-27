import Hilo from "./Hilo";

class ConsultaPendiente extends Hilo {
    constructor(){
        super('Pendiente','')
    }
}

class ConsultaResuelta extends Hilo {
    constructor(){
        super('Resuelta', '')
        this._respuesta = '';
    }

    get getrespuesta(){
        return this._respuesta;
    }

    set setmensaje(mensaje){
        this._mensaje = mensaje;
    }

    set setrespuesta(respuesta){
        this._respuesta = respuesta;
    }

    verRespuesta(){
        return (
            <div>
                <p>{this._respuesta}</p>
            </div>
        )
    }
    
}
class ConsultaResueltaVid extends Hilo {
    constructor(){
        super('Resuelta', '')
        this._respuesta = '';
    }

    get getrespuesta(){
        return this._respuesta;
    }

    set setmensaje(mensaje){
        this._mensaje = mensaje;
    }

    set setrespuesta(respuesta){
        this._respuesta = respuesta;
    }

    verRespuesta(){
        return (
            <div>
                <p>{this._respuesta}</p>
            </div>
        )
    }
    
}


export { ConsultaPendiente, ConsultaResuelta,ConsultaResueltaVid };