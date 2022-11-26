import React, { useState } from "react";
import Axios from "axios";



export default function RecContra(){

    const [valTok, setValTok] = useState(0);
    const [mostarValTok, setMostrarValTok] = useState(false);
    const [confTok, setConfTok] = useState('');

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
        Axios.put("http://localhost:4000/visitante/cambioContraseña",{
          email: formData.email,
          password: formData.password
        }).then(function (response) {
          if(response.statusText === "OK" && confTok === valTok){          
            console.log("todo gucci");
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("No existe el correo");
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
                <h1 className='text-center mb-5'>GET YOUR PASSWORD AGAIN</h1>


                <form onSubmit={handleSubmit} method="get" required>
                    
                    <label>Upload your E-MAIL:</label>
                    <div className="my-3">                        
                        <input type="text" name="email" className="form-control mx-2 my-2 input-group" placeholder="E-mail" required></input>
                    </div>
                    <button type="button" onClick={() =>handleClickToken()} onSubmit={handleSubmit} className="btn btn-primary ml-2 align-items-center mt-4 mb-3 input-group">Consigue tu codigo de verificacion</button>
                    <h1>{mostarValTok? valTok:null}</h1>    
                </form>
                <form>
                    <div className="input-group my-3">                        
                        <input  value={confTok}  type="text" name="codver" className="form-control mx-2 my-2" onChange={e => setConfTok(e.target.value)} placeholder='Código de verificacion' required></input>
                    </div>
                    <label className="mb-3" >Upload your new password:</label>                        
                    <div className="input-group">
                        <input type="password" name="password" className="form-control mx-2 my-2" onChange={handleChangeInput} placeholder='Nueva Contraseña' required></input>
                    </div>
                    <label className="mt-4 mb-3" >Upload your new password again:</label>                        
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
    
