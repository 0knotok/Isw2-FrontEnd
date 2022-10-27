import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

export default function SubirArchivo(){

  const [especialidad, setEspecialidad] = React.useState([]);
  const[esp, setEsp] = React.useState("0");

  React.useEffect(() => {
    
    Axios.get('http://localhost:4000/curso/mostrarCursos')
      .then(function (response) {
        // handle success
        setEspecialidad(response.data);
      }, [])
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []
  )
  
  const[formFile, setFile] = useState();
  const[formName, setName] = useState();
  

  function handleChangeInput(event) {
    event.preventDefault();
    let files = event.target.files;
    setName(files[0].name);
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      const pdf = e.target.result;
      console.log(pdf);
      setFile(pdf);
    }
  }

    
  function submitFile(e){
      let reader = formFile;
      let nombre = formName;
      let idCurso = esp;
      if(reader){
        if(idCurso != 0){
          reader = reader.substring(28, reader.length);
          Axios.post("http://localhost:4000/profesor/subirArchivo",{
            formIdCurso: idCurso,
            formName: nombre,
            formData: reader
          }).then(response => {console.warn("result",response)})
          .catch(function (error) {
            console.log(error);
          });
          alert("Material uploaded");
        }else{alert("Choose a course first")}
      }else{alert("Choose a file first")}
      };

  return(
        <div className='container'>
            <div>
              <h2>Insert Material</h2>
            </div>
           
            <div>
              <p>Choose Course</p>
              
              <select className="form-control me-2" name="especialidad" id="especialidad" aria-label="selectEsp" onChange={(e)=>{
                    setEsp(e.target.value);
                  }} required>
                  <option defaultValue="0"></option>
                  {especialidad.map(especialidad => <option key={especialidad.ID_CURSO} value={especialidad.ID_CURSO}>{especialidad.NOMBRE}</option>)}
              </select>
            </div>
            <div>
              <input type="file" name="uploadFile" onChange={(e)=>handleChangeInput(e)} />
            </div>
            <div>
              <button type="submit" name="submitFile" onClick={(e)=>submitFile(e)} className="btn btn-primary ml-2 align-items-center">Submit</button>
            </div>
           
        </div>
    )
}