import React, { useState } from "react";
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
            cookies.set('id_user', response.data.id_user, {path: '/'});
            cookies.set('id_paciente',response.data.id_paciente,{path:'/'});
            cookies.set('nombres', response.data.nombres, {path: '/'});
            cookies.set('apellidos', response.data.apellidos, {path: '/'});
            cookies.set('telefono', response.data.telefono, {path: '/'});
            cookies.set('email', response.data.email, {path: '/'});
            cookies.set('password', response.data.contrasena, {path: '/'});
            cookies.set('username', response.data.username===null?"":response.data.username, {path: '/'});
            cookies.set('perfil_user',response.data.perfil_user,{path:'/'});
            if(cookies.get('perfil_user')==='doctor'){
              window.location.href='./homeDoctor'
            }else{
            window.location.href="./";
            }
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
                        <label>Ingrese su contraseña:</label>                        
                        <div className="input-group mb-3 my-3 mb-5">
                            <input type="password" name="password" className="form-control mx-2 my-2" onChange={handleChangeInput} placeholder='Contraseña' required></input>
                        </div>
                        <button type="submit" onSubmit={handleSubmit} method="post" className="btn btn-primary ml-2 align-items-center"> Ingresar</button>
                    </form>
                </div>
                <div className='col-4  pd-2'></div>
            </div>
        </div>
    )
}