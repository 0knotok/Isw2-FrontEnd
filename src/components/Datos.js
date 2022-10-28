import React from 'react';
import Cookies from "universal-cookie";

export default function Datos() {


    const cookies = new Cookies();

    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
        email: "",
        telefono: "",
    }
    )

    function handleChangeInput(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    
    return (
        <div className="row">
            <div className="col-4">
                <img className="img-thumbnail" src="https://img.freepik.com/vector-gratis/colegial-pie-sobre-libros-levantando-mano-hablando-ilustracion-vector-plano-informe-tarea-casa-lectura-alumno-escuela-educacion-conocimiento_74855-8576.jpg" alt="" />
            </div>
            <div className="col-8">
                <div className="form-group row mb-2">
                    <label for="codigo" className="col-4">First name:</label>
                    <div className="col-8">
                        <input type="text" className="form-control" value={cookies.get('primer_nom')} readOnly />
                    </div>                                            </div>
                <div className="form-group row mb-2">
                    <label for="codigo" className="col-4">Paternal surname:</label>
                    <div className="col-8">
                        <input type="text" className="form-control" value={cookies.get('ap_pat')} readOnly />
                    </div>
                </div>
                <div className="form-group row mb-2">
                    <label for="codigo" className="col-4">Mother's last name:</label>
                    <div className="col-8">
                        <input type="text" className="form-control" value={cookies.get('ap_mat')} onChange={handleChangeInput} readOnly />
                    </div>
                </div>
                <div className="form-group row mb-2">
                    <label for="codigo" className="col-4">Username:</label>
                    <div className="col-8">
                        <input type="text" className="form-control" value={cookies.get('nom_usuario')} onChange={handleChangeInput} readOnly />
                    </div>
                </div>
                <div className="form-group row mb-2">
                    <label for="codigo" className="col-4">E-Mail:</label>
                    <div className="col-8">
                        <input type="email" className="form-control" value={cookies.get('e_mail')} onChange={handleChangeInput} readOnly />                                                </div>
                </div>
                <div className="form-group row mb-2">
                    <label for="codigo" className="col-4">Telephone number:</label>
                    <div className="col-8">
                        <input type="number" className="form-control" value={cookies.get('numero_celular')} onChange={handleChangeInput} readOnly />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="codigo" className="col-4">DNI:</label>
                    <div className="col-8">
                        <input type="text" className="form-control" value={cookies.get('doc_id')} onChange={handleChangeInput} readOnly />
                    </div>
                </div>
            </div>
        </div>    
    )
}