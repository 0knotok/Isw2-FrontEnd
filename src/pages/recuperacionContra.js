import React, { useState } from "react";
import Navbar from '../components/Navbar.js';
import Axios from "axios";
import Cookies from "universal-cookie";


export default function RecContra(){

    const [valTok, setValTok] = useState(0);
    const [mostarValTok, setMostrarValTok] = useState(false);

    const handleClickToken =()=>
    {
      const min = 1000;
      const max = 9999;
      const tokenRec = Math.round(min + Math.random()*(max-min));
      setValTok(tokenRec);
      setMostrarValTok(true);
   }
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
            cookies.set('tipo_usuario',response.data.TIPO_USUARIO===0?"administrator":response.data.TIPO_USUARIO===1?"teacher":"student",{path:'/'});
            window.location.href="./portal";
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("Credenciales incorrectas");
        });
        console.log(formData);
      }

    return(
        <div className='container'>
        <div className='row my-5'></div>
        <div className='row my-5'></div>
        <div className='row my-5 '  >
            <div className='col '></div>
            <div className='col  text-center px-5 border border-dark p-4 rounded' >
                <h1 className='text-center mb-5'>RECUPERAR CONTRASEÑA</h1>


                <form onSubmit={handleSubmit} method="get" required>
                    
                    <label>Ingrese su correo electrónico:</label>
                    <div className="my-3">                        
                        <input type="text" name="email" className="form-control mx-2 my-2 input-group" onChange={handleChangeInput} placeholder="E-mail" required></input>
                    </div>
                    <button type="button" onClick={() =>handleClickToken()} onSubmit={handleSubmit} className="btn btn-primary ml-2 align-items-center mt-4 mb-3 input-group">Consigue tu codigo de verificacion</button>
                    <h1>{mostarValTok? valTok:null}</h1>    
                </form>

                <form>
                    <div className="input-group my-3">                        
                        <input type="text" name="codver" className="form-control mx-2 my-2" onChange={handleChangeInput} placeholder='Código de verificacion' required></input>
                    </div>
                    <label className="mb-3" >Ingrese su nueva contraseña:</label>                        
                    <div className="input-group">
                        <input type="password" name="password" className="form-control mx-2 my-2" onChange={handleChangeInput} placeholder='Nueva Contraseña' required></input>
                    </div>
                    <label className="mt-4 mb-3" >Ingrese su nueva contraseña nuevaente:</label>                        
                    <div className="input-group">
                        <input type="password" name="password" className="form-control mx-2 my-2" onChange={handleChangeInput} placeholder='Nueva Contraseña otra vez' required></input>
                    </div>
                    <button type="submit" onSubmit={handleSubmit} method="put" className="btn btn-primary ml-2 align-items-center mt-4"> Enviar</button>
                </form>
            </div>
            <div className='col '></div>
        </div>
    </div>
)
}
    
