import FactoryOpcionUnica from "./FactoryOpcionUnica";
import FactoryOpcionMultiple from "./FactoryOpcionMultiple";
import FactoryAsociacion from "./FactoryAsociacion";
import FactoryDesarrollo from "./FactoryDesarrollo";

class FactoryPregunta {
    crearPregunta(tipo){
        if(tipo == 'Opcion Unica'){
            return new FactoryOpcionUnica;
        }
        else if (tipo == 'Opcion Multiple'){
            return new FactoryOpcionMultiple;
        }
        else if (tipo == 'Asociacion'){
            return new FactoryAsociacion;
        }
        else if (tipo == 'Desarrollo'){
            return new FactoryDesarrollo;
        }
        else{
            console.log('Error: No existe dicho tipo')
        }
    }
}

export default FactoryPregunta;