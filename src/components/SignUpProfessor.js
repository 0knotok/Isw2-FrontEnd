import React from 'react'
import { useState } from "react"

export default function SignUpProfessor() {
    const [listaCertf, setListaCertf] =
        useState([{ Certificado: "" },]);

    const handlelistaCertf = () => {
        setListaCertf([...listaCertf, { Certificado: "" }])
    }

    const handlelistaCertfRem = (index) => {
        const lista = [...listaCertf]
        lista.splice(index, 1)
        setListaCertf(lista);
    }
    return (
        <div classname="w-75 p-3">
            <div className="row">
                <div className="col-md-4 mx-2 my-2">
                    E-Learn
                </div>
                <div className="col-md-12">
                    <h2 className="text-center">Welcome/Wilkommen/Bienvenido</h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-3 " />
                <div className="col-6  mt-5">
                    <h2 className="mt-4">Personal Information</h2>
                    <div className="input-group my-3">
                        <input type="text" className="form-control mx-2" placeholder="First name" />
                        <input type="text" className="form-control mx-1" placeholder="Paternal lastname" />
                        <input type="text" className="form-control mx-2" placeholder="Mother's lastname" />
                    </div>
                    <div className="input-group my-3">
                        <input type="date" className="form-control mx-2" />
                        <input type="text" className="form-control mx-2" placeholder="Telephone" />
                        <input type="text" className="form-control mx-2" placeholder="Dni" />
                    </div>
                    <h2 className="mt-4">Professor personal Information</h2>
                    <div className="input-group my-3">
                        <input type="text" className="form-control mx-2" placeholder="Username" />
                        <input type="text" className="form-control mx-2" placeholder="E-mail" />
                    </div>
                    <div className="input-group my-3">
                        <input type="password" className="form-control mx-2" placeholder="Enter your password" />
                        <input type="password" className="form-control mx-2" placeholder="Repeat your password" />
                    </div>
                    <h2 className="mt-4">Certificates</h2>
                    {listaCertf .map((certf, index) =>(
                            <div key={index} className="input-group my-3">
                            <input type="text" className="form-control mx-2" placeholder='Certificate'></input>
                            <input type="text" className="form-control mx-2" placeholder='URL'></input>
                            <input type="date" className="form-control"></input>
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
                    <div className="row">
                        <div className="col-4 mx-2" />
                        <div className="col-2 mx-4">
                            <link to="/" />
                            <button className="btn btn-primary">Registrese</button>
                        </div>
                        <div className="col-5" />
                    </div>
                </div>
                <div className="col-3 " />
            </div>
        </div>
    )
}