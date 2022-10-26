import React from 'react'
import { Link } from 'react-router-dom';  

export default function SignUpAl(){
    return(
        <div class="d-flex justify-content-center">
        <div className='w-75 p-3'>
            <div class="row">
                <div class="col-md-4 mx-2 my-2">
                    E-Learn
                </div>
                <div class="col-md-12">
                    <h2 class="text-center">Welcome/Wilkommen/Bienvenido</h2>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-3 "></div>
                <div class="col-6  mt-5">
                    <h2 class="mt-4">Datos Personales</h2>
                    <div class="input-group my-3">
                        <input type="text" class= "form-control mx-2" placeholder='Primer Nombre'></input>
                        <input type="text" class= "form-control mx-1" placeholder='Apellido Paterno'></input>
                        <input type="text" class= "form-control mx-2" placeholder='Apellido Materno'></input>
                    </div>
                    <div class="input-group my-3">
                        <input type="date" class="form-control mx-2"></input>
                        <input type="text" class="form-control mx-2" placeholder='Numero Celular'></input>
                        <input type="text" class="form-control mx-2" placeholder='Dni'></input>
                    </div>
                    <h2 class="mt-4">Datos de Usuario</h2>
                    <div class="input-group my-3">
                        <input type="text" class="form-control mx-2" placeholder='Nombre de usuario'></input>
                        <input type="text" class="form-control mx-2" placeholder='E-mail'></input>
                    </div>
                    <div class="input-group my-3">
                        <input type="password" class="form-control mx-2" placeholder='Ingrese su contraseña'></input>
                        <input type="password" class="form-control mx-2" placeholder='Reingrese su contraseña'></input>
                    </div>
                    <div class="row">
                        <div class="col-4 mx-2"></div>
                        <div class="col-2 mx-4">
                            <Link to='/'>
                                <button class="btn btn-primary">Registrese</button>
                            </Link>
                        </div>
                        <div class="col-5"></div>
                    </div>
                </div>
                <div class="col-3 "></div>
            </div>
        </div>
        </div>
    )
}