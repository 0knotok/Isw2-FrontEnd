import { MultipleCuatro, MultipleCinco, MultipleSeis, MultipleSiete } from "./OpcionMultiple";

class FactoryOpcionMultiple {
    crearMultiple(opciones){
        if(opciones == 4){
            return new MultipleCuatro;
        }
        else if (opciones == 5){
            return new MultipleCinco;
        }
        else if (opciones == 6){
            return new MultipleSeis;
        }
        else if (opciones == 7){
            return new MultipleSiete;
        }
        else{
            console.log('Error: No se pueden tantas opciones')
        }
    }
}

export default FactoryOpcionMultiple;