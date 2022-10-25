import { UnicaDos,UnicaTres,UnicaCuatro,UnicaCinco } from "./OpcionUnica";

class FactoryOpcionUnica {
    crearUnica(opciones){
        if(opciones == 2){
            return new UnicaDos;
        }
        else if (opciones == 3){
            return new UnicaTres;
        }
        else if (opciones == 4){
            return new UnicaCuatro;
        }
        else if (opciones == 5){
            return new UnicaCinco;
        }
        else{
            console.log('Error: No se pueden tantas opciones')
        }
    }
}

export default FactoryOpcionUnica;