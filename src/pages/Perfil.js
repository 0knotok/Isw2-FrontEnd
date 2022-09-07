import React from 'react';
import Navbar from '../components/Navbar.js';

const Perfil = () => {
    return (
        <div>
            <div className="container">
            <Navbar/>
                <div className="row my-4">
                    <div className="col-md-8 offset-md-2">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                    type="button" role="tab" aria-controls="home" aria-selected="true">Datos del Usuario</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                    type="button" role="tab" aria-controls="profile" aria-selected="false">Actualizar Datos</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <br/>
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-4">
                                            <img className="img-thumbnail" src="https://img.freepik.com/vector-gratis/colegial-pie-sobre-libros-levantando-mano-hablando-ilustracion-vector-plano-informe-tarea-casa-lectura-alumno-escuela-educacion-conocimiento_74855-8576.jpg" alt=""/>
                                        </div>
                                        <div className="col-8">
                                            <div className="form-group row">
                                                <label for="codigo" className="col-4">ID de Usuario</label>
                                                <div className="col-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="codigo" className="col-4">Primer Nombre</label>
                                                <div className="col-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="codigo" className="col-4">Apellido Paterno</label>
                                                <div className="col-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="codigo" className="col-4">Apellido Materno</label>
                                                <div className="col-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="codigo" className="col-4">Nombre de Usuario</label>
                                                <div className="col-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="codigo" className="col-4">Contraseña</label>
                                                <div className="col-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="codigo" className="col-4">E-Mail</label>
                                                <div className="col-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="codigo" className="col-4">Número de Teléfono</label>
                                                <div className="col-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="codigo" className="col-4">DNI</label>
                                                <div className="col-4">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="col-md-6 offset-md-3">
                                        <h3 className="text-center">Modificación de los Datos</h3>
                                        <div className="form-group row">
                                            <label for="Usuario" className="col-4">Nombre de Usuario</label>
                                            <div className="col-8">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="Usuario" className="col-4">Contraseña</label>
                                            <div className="col-8">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="Usuario" className="col-4">E-Mail</label>
                                            <div className="col-8">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="Usuario" className="col-4">Número de Teléfono</label>
                                            <div className="col-8">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <br/>
                                            <div className="form-group text-center">
                                                <button className="btn btn-info">Actualizar</button>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Perfil