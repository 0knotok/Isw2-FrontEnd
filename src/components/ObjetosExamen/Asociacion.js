import Pregunta from "./Pregunta";

class AsociacionCuatro extends Pregunta {
    constructor(){
        super('Asociacion','Cuatro Opciones',null)
    }
}

class AsociacionCinco extends Pregunta {
    constructor(){
        super('Asociacion','Cinco Opciones',null)
    }
}

class AsociacionSeis extends Pregunta {
    constructor(){
        super('Asociacion','Seis Opciones',null)
    }
}

class AsociacionSiete extends Pregunta {
    constructor(){
        super('Asociacion','Siete Opciones',null)
    }
}

export { AsociacionCuatro,AsociacionCinco,AsociacionSeis,AsociacionSiete };