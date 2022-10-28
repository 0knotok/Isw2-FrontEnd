import React from 'react'
import SignUpAlumno from '../components/SignUpAIumno'

export default function SignUpAl(){
    return(
        <div className="d-flex justify-content-center">
        <div classNameName='w-75 p-3'>
            <div className="row">
                <div className="col-md-4 mx-2 my-2">
                    E-Learn
                </div>
                <div className="col-md-12">
                    <h2 classNameName="text-center">Welcome/Wilkommen/Bienvenido</h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-3 "></div>
                <div className="col-6  mt-5">
                    <SignUpAlumno/>
                </div>
                <div className="col-3 "></div>
            </div>
        </div>
        </div>
    )
}