import Navbar from '../components/Navbar.js'
import React from 'react'
import { Link } from "react-router-dom"
import Cookies from "universal-cookie"

export default function CrearEvaluacion(){
  
  return(
  <div className="container">
    <Navbar/>
    <br />
    <div className="container">
      <h1>Evaluación</h1>
      <div className="container">
        
        <iframe style={{height: '800px', width: '100%'}} src="https://forms.gle/ST4kV3xED15uksUd7">
                        </iframe>
        <div className="col-md-12 text-center">
          <button type="button" className="btn btn-success">Enviar formulario</button>
          <Link to='/Curso'>
          <button type="button" className="btn btn-danger">Volver</button></Link>
        </div>
      </div>
    </div>
  </div>
  )
}
