import Navbar from '../components/Navbar.js'
import React from 'react'
import { Link } from "react-router-dom"

export default function CrearEvaluacion(){
    return(
      <div className="container">
      <Navbar/>
      <div className="container">
        <h1>Menú de creación de formularios</h1>
        <div className="container text-center">
          <img style={{height: '50%', width: '70%'}} src="https://cloudsfactory.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/5/1597.jpg" />
          <div className="col-md-12 text-center">
            <button type="button" className="btn btn-success">Subir formulario</button>
            <Link to='/#'>
          <button type="button" className="btn btn-danger">Cancelar</button></Link>
          </div>
        </div>
      </div>
      </div>
    ) 
}
