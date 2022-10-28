import Navbar from '../components/Navbar.js'
import React from 'react'
import { Link } from "react-router-dom"
import Cookies from "universal-cookie"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Axios from "axios"

export default function CrearEvaluacion(){

  let { search } = useLocation();
  let query = new URLSearchParams(search);

  let get_id_curso = query.get("id_curso");
  let get_nombre_curso = query.get("nombre_curso");


  const [examen, setExamen] = useState([]);  //array de datos

  useEffect(() => {
    Axios.post("http://localhost:4000/estudiante/mostrarExamen", {
      id_curso: get_id_curso
    }).then(function (response) {
      if (response.statusText === "OK") {
        // Enviar cursos
        setExamen(response.data);
        console.log(response.data)
      }
    })
      .catch(function (error) {
        console.log(error);
      });

  }, []
  )

  return(
  <div className="container">
    <Navbar/>
    <br />
    <div className="container">
      <h1>Evaluación {get_nombre_curso}</h1>
      <div className="container">
        
        <iframe style={{height: '800px', width: '100%'}} src={examen.LINK}>
                        </iframe>
        <div className="col-md-12 text-center">
          <Link to='/PortalAlumno'>
          <button type="button" className="btn btn-danger">Return</button></Link>
        </div>
      </div>
    </div>
  </div>
  )
}
