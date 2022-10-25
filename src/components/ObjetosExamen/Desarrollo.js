import Pregunta from "./Pregunta";

class Texto extends Pregunta {
    constructor(){
        super('Desarrollo','Texto',null)

    }
}

class Archivo extends Pregunta {
    constructor(){
        super('Desarrollo','Archivo',null)
    }
}

export { Texto, Archivo };
