import FactoryConsulta from "./FactoryConsulta";

class FactoryHilo {
    crearHilo(tipo){
        if (tipo == 'Consulta'){
            return new FactoryConsulta;
        }
        else{
            console.log('Error: No existe dicho estado de consulta')
        }
    }
}

export default FactoryHilo;