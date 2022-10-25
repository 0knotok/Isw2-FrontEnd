import Navbar from '../components/Navbar';
import CrearConsulta from '../components/ConsultaForo.js';

function ForoPagina(){
  return (
    <div class="d-flex justify-content-center">
      <div className="w-75 p-3">
        <body>
          <Navbar/>
          <div className="card mt-4" id="foro">
            <div className="card-body">
              <h3>Foro 1: Gramática</h3><br></br>
              <h6>Crea una Consulta para Preguntar:</h6><br></br>
              <div>
                <CrearConsulta />
              </div>
              <div>
                <CrearConsulta />
              </div>
              <div>
                <CrearConsulta />
              </div>
            </div>
          </div>
          <br></br><br></br>
        </body>
      </div>
    </div>
  )
}

export default ForoPagina;
