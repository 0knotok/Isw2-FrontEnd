import React, { useEffect, useState } from "react";
import Curso from "../components/Curso";
import Foro from "../components/Foro";
import Zoom from "../components/Zoom";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';
import Cookies from "universal-cookie";
import Axios from "axios";

export default function Portal() {
  const cookies = new Cookies();
  /* var solouna = 0;
   //Conseguir los cursos de un usuario.
   if(solouna === 0){
     const cursos = Axios.post("https://localhost:4000/visitante/cursosUsuarios",{
     ID_USUARIO:cookies.get("id_usuario")
   }).then(function(response)
   {if(response.statusText === "OK"){
       const nombreCursos = response.data.map(cursos => cursos.NOMBRE);
       const porcentajeCrusos = response.data.map(cursos => cursos.PORCENTAJE);
       const fechaIni = response.data.map(cursos => cursos.FECHA_INICIO);
       const fechaFin = response.data.map(cursos => cursos.FECHA_FIN);
   }
 }).catch(function(error)
   {
     console.log(error);
     alert(cookies.get("id_usuario"));
   })
   solouna++
 };*/
  const [cursos, setCursos] = useState([]);  //array de datos

  useEffect(() => {

    Axios.post("http://localhost:4000/estudiante/mostrarCursos", {
      id_usuario: cookies.get('id_usuario')
    }).then(function (response) {
      if (response.statusText === "OK") {
        // Enviar cursos
        setCursos(response.data.rows);
      }
    })
      .catch(function (error) {
        console.log(error);
      });

  }, []
  )

  return (
    <div className="d-flex justify-content-center">

      <section className="w-75 p-3 ">
        <Navbar />
        <div className="mb-6">
          <h2 className="text-center">
            <small className="text-muted">Your {cookies.get("tipo_usuario")} portal, {cookies.get("primer_nom")}</small>
          </h2>
        </div>
        <div className="d-flex mt-6 justify-content-between">
          <div>
            <h1 className="font-weight-normal">My courses</h1>
          </div>
          <div>
            <div className="d-flex justify-content-end">
              <input type="search" id="form1" className="form-control" placeholder="Search" />
              <button type="button" className="btn btn-light ml-2 d-flex align-items-center">
                <FiSearch />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="d-flex justify-content-between mt-2">
            <div>
              <p className="text-primary text-white">More courses</p>
            </div>
            <div>
              <select className="border-white" aria-label=".form-select-sm example" name id>
                <option value>All</option>
                <option value>In progress</option>
                <option value>Finished</option>
                <option value>Expired</option>
              </select>
            </div>
          </div>

          <div className="cursosEstudiante">
            {cursos.map((curso) => (
            
              <Curso key={curso.ID_CURSO} id={curso.ID_CURSO} nombre={curso.NOMBRE} ptj={`${curso.PORCENTAJE}%`} />
            ))}
          </div>

          <div className="d-flex justify-content-between mt-5">
            <div>
              <h1 className="font-weight-normal">My communities</h1>
            </div>
          </div>
          <div className="cursosEstudiante">
            <Foro />
          </div>
        </div>
        <Zoom />
      </section>
    </div>
  )
}
