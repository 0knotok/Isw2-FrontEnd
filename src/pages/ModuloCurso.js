import Navbar from "../components/Navbar"
import document from "../documents/Voixpassive.pdf"
import { Link } from "react-router-dom"
import { useLocation} from "react-router-dom"
import { useState, useEffect } from "react"
import Axios from "axios"

const Curso = () => {

  let { search } = useLocation();
  let query = new URLSearchParams(search);

  let get_id_curso = query.get("id_curso");
  let get_nombre_curso = query.get("nombre_curso");

  const [material, setMaterial] = useState([]);  //array de datos

  useEffect(() => {

    Axios.post("http://localhost:4000/estudiante/mostrarMaterial", {
      id_curso: get_id_curso
    }).then(function (response) {
      if (response.statusText === "OK") {
        // Enviar cursos
        setMaterial(response.data.rows);
        console.log(response.data.rows)
      }
    })
      .catch(function (error) {
        console.log(error);
      });

  }, []
  )


    return (
        <div class="d-flex justify-content-center">
        <div className="w-75 p-3">
            <div className="row">
                <Navbar/>
            </div>
            <div className="row">
                <div className="col-3 ms-4 mt-5">
                    <div className="p-5 container-fluid border border-secondary">
                      {get_nombre_curso}
                    </div>
                    <div className="row text-white">
                        hola
                    </div>
                    <div className="p-5 container-fluid border border-secondary">
                        <div className="row">
                            <div className="col">
                                Evaluación
                            </div>
                            <div className="col">
                                <Link to='/FormularioEvaluacion'>
                                    <button type="button" className="btn btn-success">Ir</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col">
                        <h1>Documento:</h1>
                        <iframe height="170%" width="100%" src={document}>
                        </iframe>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Curso