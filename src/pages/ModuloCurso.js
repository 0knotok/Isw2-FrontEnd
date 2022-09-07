import Navbar from "../components/Navbar"
import document from "../documents/Voixpassive.pdf"
import { Link } from "react-router-dom"

const Curso = () => {
    return (
        <div>
            <div className="row">
                <Navbar/>
            </div>
            <div className="row">
                <div className="col-3 ms-4 mt-5">
                    <div className="p-5 container-fluid border border-secondary">
                        NOMBRE DEL CURSO
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
                                <Link to='/evaProfe'>
                                    <button>Ir</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col">
                        <h1>Documento:</h1>
                        <iframe height="250%" width="100%" src={document}>
                        </iframe>
                </div>
            </div>
        </div>
    )
}

export default Curso