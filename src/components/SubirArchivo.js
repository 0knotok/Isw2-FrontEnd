import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

export default function SubirArchivo(){
    
  function onChange(event){
    event.preventDefault();
    
      let files = event.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = (e) => {
        const pdf = e.target.result
        const pdf2= "webo";
        Axios.post("http://localhost:4000/profesor/subirArchivo",{
          formData: pdf2,
        }).then(response => {console.warn("result",response)})
        .catch(function (error) {
          console.log(error);
        });
      }

      
      };
  

  return(
        <div className='container'>
            <div>
              <h2>Subir archivo</h2>
            </div>
            <div>
              <p>Elegir curso</p>
              <select name="cursoUploadFile">
                <option defaultValue="curso1" selected>Curso 1</option>
                <option value="curso2">Curso 2</option>
                <option value="curso3">Curso 3</option>
              </select>
            </div>
            <div>
              <input type="file" name="uploadFile" onChange={(e)=>onChange(e)} />
            </div>
        </div>
    )
}