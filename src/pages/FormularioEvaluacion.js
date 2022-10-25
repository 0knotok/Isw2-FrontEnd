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
        <img style={{height: '100%', width: '100%'}} src="https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png" />
        <div className="col-md-12 text-center">
          <button type="button" className="btn btn-success">Enviar formulario</button>
          <Link to='/Curso'>
          <button type="button" className="btn btn-danger">Cancelar</button></Link>
          
        </div>
      </div>
    </div>
  </div>
  )
}
