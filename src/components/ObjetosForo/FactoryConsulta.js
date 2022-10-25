import { ConsultaPendiente, ConsultaResuelta } from "./Consulta";

class FactoryConsulta {
    crearEstado(estado){
        if (estado == 'Pendiente'){
            return new ConsultaPendiente;
        }
        else if (estado == 'Resuelta'){
            return new ConsultaResuelta;
        }
        else{
            console.log('Error: No existe dicho estado de consulta')
        }
    }
}

export default FactoryConsulta;