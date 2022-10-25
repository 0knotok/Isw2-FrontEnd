import { AsociacionCuatro,AsociacionCinco,AsociacionSeis,AsociacionSiete } from "./Asociacion";

class FactoryAsociacion {
    crearAsociacion(opciones){
        if(opciones == 4){
            return new AsociacionCuatro;
        }
        else if (opciones == 5){
            return new AsociacionCinco;
        }
        else if (opciones == 6){
            return new AsociacionSeis;
        }
        else if (opciones == 7){
            return new AsociacionSiete;
        }
        else{
            console.log('Error: No se pueden tantas opciones')
        }
    }
}

export default FactoryAsociacion;