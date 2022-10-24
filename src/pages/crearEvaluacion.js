import React from 'react'
import Navbar from '../components/Navbar.js'
import { useState } from "react";

export default function CrearEvaluacion(){

    const[formData, setFormData] = useState(
        {
          enlaceEv:""
        }
      )

    return (
        <div class="d-flex justify-content-center">
            <div class='w-75 p-3'>
                <Navbar/>
                <div className="row mt-4">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h3>Crear una evaluacion</h3>
                        <h6>Instrucciones: </h6>
                        <p>Presione el siguiente boton para acceder a google forms y crear el examen, posteriormente copie y pegue el
                        enlace en el siguiente recuadro para que se almacene en el sistema.
                        </p>
                        <a href='https://docs.google.com/forms/u/0/'>
                        <button className='btn' onClick={"https://docs.google.com/forms/u/0/"}><img
                            
                            width="150" height="100"
                            className="img-thumbnail"
                            src="../img/gForms.png"
                        /></button>
                        </a>
                        <div>
                        
                        <label htmlFor='enlaceEv'>Enlace:</label>
                        <input type="text" className='form-control' id='enlaceEv' />
                        </div>
                        <form >
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="submit" >Ingresar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
            </div>
        </div>
    )
}