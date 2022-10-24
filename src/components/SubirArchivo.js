import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

export default function SubirArchivo(){

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
      setFile(pdf);
    }
  }

    
  function submitFile(e){
      let reader = formFile;
      let nombre = formName;
      console.log(nombre);
      reader = reader.substring(28, reader.length);
      if(reader){
          Axios.post("http://localhost:4000/profesor/subirArchivo",{
            formName: nombre,
            formData: reader
          }).then(response => {console.warn("result",response)})
          .catch(function (error) {
            console.log(error);
          });
        
      }else{alert("Choose a file first")}
      };

  

  return(
        <div className='container'>
            <div>
              <h2>Subir archivo</h2>
            </div>
           
            <div>
              <p>Elegir curso</p>
              <select name="cursoUploadFile">
                <option defaultValue="curso1">Curso 1</option>
                <option value="curso2">Curso 2</option>
                <option value="curso3">Curso 3</option>
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