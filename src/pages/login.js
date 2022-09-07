import React from 'react'
import { Link } from 'react-router-dom';  

export default function LogIn(){
    return(
        <div className='container'>
            <div className='row my-5'></div>
            <h1>E-LEARN</h1>
            <div className='row my-5'></div>
            <div className='row my-5' >
                <div className='col-4 '></div>
                <div className='col-4  text-center px-5' >
                    <h1 className='text-center mb-5'>LOGIN</h1>
                    <label>Ingrese su usuario:</label>
                    <div class="input-group my-3">                        
                        <input type="text" class="form-control mx-2 my-2" placeholder='Nombre de Usuario'></input>
                    </div>
                    <label>Ingrese su contraseña:</label>                        
                    <div class="input-group mb-3 my-3 mb-5">
                        <input type="password" class="form-control mx-2 my-2" placeholder='Contraseña'></input>
                    </div>
                    <Link to='./portal'>
                        <button type="button" className="btn btn-primary ml-2 align-items-center"> Ingresar</button>
                    </Link>
                    <br/>
                    <Link to='./signUpA'>
                        <span>Registrarse como Alumno</span>
                    </Link>
                    <br/>
                    <Link to='./signUpP'>
                        <span>Registrarse como Profesor</span>
                    </Link>
                </div>
                <div className='col-4  pd-2'></div>
            </div>
        </div>
    )
}