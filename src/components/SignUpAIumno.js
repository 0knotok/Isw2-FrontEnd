import React from 'react'

export default function SignUpAlumno() {
    return (
        <div>
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
            <h2 className="mt-4">User personal information</h2>
            <div className="input-group my-3">
                <input type="text" className="form-control mx-2" placeholder="Username" />
                <input type="text" className="form-control mx-2" placeholder="E-mail" />
            </div>
            <div className="input-group my-3">
                <input type="password" className="form-control mx-2" placeholder="Enter your password" />
                <input type="password" className="form-control mx-2" placeholder="Repeat your password" />
            </div>
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
            <h2 className="mt-4">User Information for platform</h2>
            <div className="input-group my-3">
                <input type="text" className="form-control mx-2" placeholder="Username" />
                <input type="text" className="form-control mx-2" placeholder="E-mail" />
            </div>
            <div className="input-group my-3">
                <input type="password" className="form-control mx-2" placeholder="Enter your password" />
                <input type="password" className="form-control mx-2" placeholder="Reenter your password" />
            </div>
            <div className="row">
                <div className="col-4 mx-2" />
                <div className="col-2 mx-4">
                    <link to="/" />
                    <button className="btn btn-primary">Register</button>
                </div>
                <div className="col-5" />
            </div>
        </div>

    )
}