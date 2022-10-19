import React, { useState } from "react";
import { Link } from 'react-router-dom';  
import Axios from "axios";
import Cookies from "universal-cookie";

export default function LogIn(){

    const[formData, setFormData] = useState(
        {
          email: "",
          password: ""
        }
      )
    
      function handleChangeInput(event) {
        setFormData({
          ...formData,
          [event.target.name] : event.target.value
        })
      }
    
      function handleSubmit(event) {
        event.preventDefault();
    
        Axios.post("http://localhost:4000/visitante/iniciarSesion",{
          email: formData.email,
          password: formData.password
        }).then(function (response) {
          if(response.statusText === "OK"){
            // Guardar datos del usuario en cookies
            const cookies = new Cookies();
            cookies.set('ap_mat', response.data.AP_MAT, {path: '/'});
            cookies.set('ap_pat',response.data.AP_PAT,{path:'/'});
            cookies.set('doc_id', response.data.DOC_ID, {path: '/'});
            cookies.set('e_mail', response.data.E_MAIL, {path: '/'});
            cookies.set('fecha_creacion', response.data.FECHA_CREACION, {path: '/'});
            cookies.set('fecha_nac', response.data.FECHA_NAC, {path: '/'});
            cookies.set('id_usuario', response.data.ID_USUARIO, {path: '/'});
            cookies.set('nom_usuario', response.data.username===null?"":response.data.NOM_USUARIO, {path: '/'});
            cookies.set('numero_celular',response.data.NUMERO_CELULAR,{path:'/'});
            cookies.set('password',response.data.PASSWORD,{path:'/'});
            cookies.set('primer_nom',response.data.PRIMER_NOM,{path:'/'});
            cookies.set('tipo_usuario',response.data.TIPO_USUARIO,{path:'/'});
            window.location.href="./portal";
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(formData);
      }

    return(
        <div className='container'>
            <div className='row my-5'></div>
            <div className='row my-5'></div>
            <div className='row my-5'></div>
            <div className='row my-5' >
                <div className='col-4 '></div>
                <div className='col-4  text-center px-5' >
                    <form onSubmit={handleSubmit} method="post">
                        <h1 className='text-center mb-5'>LOGIN</h1>
                        <label>Ingrese su correo electrónico:</label>
                        <div className="input-group my-3">                        
                            <input type="text" name="email" className="form-control mx-2 my-2" onChange={handleChangeInput} placeholder='E-mail' required></input>
                        </div>
                        <label className="mb-3" >Ingrese su contraseña:</label>                        
                        <div className="input-group">
                            <input type="password" name="password" className="form-control mx-2 my-2" onChange={handleChangeInput} placeholder='Contraseña' required></input>
                        </div>
                        <div className = "input-group mb-5">
                        <Link className="nav-link" to='/recuperar'><button type="button" class="btn btn-link">Olvidé mi contraseña</button></Link>
                        </div>
                        <button type="submit" onSubmit={handleSubmit} method="post" className="btn btn-primary ml-2 align-items-center"> Ingresar</button>
                    </form>
                </div>
                <div className='col-4  pd-2'></div>
            </div>
        </div>
    )
}