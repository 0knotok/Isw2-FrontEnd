import React,{useState,useEffect} from 'react';
import Curso from "../components/Curso";
import Foro from "../components/Foro";
import Comentarios from './comentarios';
import Zoom from "../components/Zoom";
import Navbar from '../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
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
  /* En la parte del código: 
  <small className="text-muted">Your {cookies.get("tipo_usuario")} portal, {cookies.get("primer_nom")}</small>   
  podemos ver que se usan las cookies para obtener el tipo de usuario y según eso pintar si es Student o Professor.
  sin embargo, no se creará un único modelo, sino que se tendrán dos tipos de perfiles
  */
 const [alumno,setAlumno] = useState([]);
 
  useEffect(() => {

  Axios.get("http://localhost:4000/buscaAlumnos").then(function (response) {
    if (response.statusText === "OK") {
      // Enviar cursos
      setAlumno(response.data.rows);
      console.log(response.data.rows)
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
        </div>
        <div className="mt-4">
          <div className='container'>
            <h1>Meetings</h1>
          </div>
          <Zoom />
        </div>
        <div className='d-flex mt-2 justify-content-between'>
          <div className='container'>
            <h1>Create Evaluation</h1>
            <br></br>
            <Link to='/CreacionFormulario' className="navbar-brand">
              <button className='btn btn-primary'>Creation of forms</button>
            </Link>
          </div>
        </div>
        <div className='d-flex mt-2 justify-content-between'>
        <h1 className='my-5 mx-5'>Comment your students progress</h1>  
        </div>
        <div className='d-flex mx-5'>        
          <Comentarios nombre = {"Luis"}></Comentarios>
          {alumno.map((alumno) => (
            <Comentarios nombre = {alumno.PRIMER_NOM}/>
          ))}

        </div>
      </section>
    </div>
  )
}
