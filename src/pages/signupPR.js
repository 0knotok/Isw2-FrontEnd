import React from 'react'
import { Link } from 'react-router-dom';  
import {useState} from "react"

export default function SignUpPr(){
    const [listaCertf, setListaCertf] = 
    useState([{Certificado: ""},]);

    const handlelistaCertf = () => {
        setListaCertf([...listaCertf, {Certificado: ""}])
    }

    const handlelistaCertfRem =(index) =>{
        const lista =  [...listaCertf]
        lista.splice(index, 1)
        setListaCertf(lista);
    }
    
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

                    <h2 class="mt-4">Certificados</h2>
                        {listaCertf .map((certf, index) =>(
                            <div key={index} class="input-group my-3">
                            <input type="text" class="form-control mx-2" placeholder='Nombre de Certificado'></input>
                            <input type="text" class="form-control mx-2" placeholder='URL'></input>
                            <input type="date" class="form-control"></input>
                            {listaCertf.length - 1 === index && listaCertf.length < 5 && 
                            ( 
                               <button class="btn btn-primary mx-1" onClick={handlelistaCertf}>
                                  <span>+</span>
                                </button>
                            )} 
                        {listaCertf.length > 1&&
                            (
                            <button class="btn btn-primary mx-1" onClick={()=> handlelistaCertfRem(index)}>
                            <span>-</span>
                            </button>
                        )}
                            
                        </div>
                        ))}
                    <div class="row">
                        <div class="col-4 mx-2"></div>
                        <div class="col-2 mx-4">
                            <Link to ='/portal'>
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