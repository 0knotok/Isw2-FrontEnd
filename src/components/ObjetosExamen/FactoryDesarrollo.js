import { Texto,Archivo } from "./Desarrollo";

class FactoryDesarrollo{
    crearDesarrollo(clase){
        if (clase == 'Texto'){
            return new Texto;
        }
        else if (clase == 'Archivo'){
            return new Archivo;
        }
        else{
            console.log('Error: No existe dicha clase')
        }
    }
}

export default FactoryDesarrollo;