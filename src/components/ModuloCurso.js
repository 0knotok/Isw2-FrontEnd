const Curso = () => {
    return (
        <div>
            <div className="row">
                <div className="p-4 mb-2 container bg-primary text-white">
                    <a> &lt; Regresar</a>
                </div>
            </div>
            <div className="row">
                <div className="col-3 ms-4">
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
                                <button>Ir</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="container-fluid ">
                        <h1>Documento:</h1>
                        <iframe src="Isw2-FrontEnd\src\documents\Voixpassive.pdf">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curso