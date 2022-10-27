import React from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';  
import {AiOutlineLogout} from 'react-icons/ai';
import Cookies from "universal-cookie";

const Navbar = () => {

  const cookies = new Cookies()

  const navigate = useNavigate();

  const cerrarSesion = () => {
    cookies.remove('ap_mat', {path: '/'});
    cookies.remove('ap_pat', {path: '/'});
    cookies.remove('doc_id', {path: '/'});
    cookies.remove('e_mail', {path: '/'});
    cookies.remove('fecha_creacion', {path: '/'});
    cookies.remove('fecha_nac', {path: '/'});
    cookies.remove('id_usuario', {path: '/'});
    cookies.remove('nom_usuario', {path: '/'});
    cookies.remove('numero_celular', {path: '/'});
    cookies.remove('password', {path: '/'});
    cookies.remove('primer_nom', {path: '/'});
    cookies.remove('tipo_usuario', {path: '/'});
    navigate('/');
  }    


    let tipo_user = cookies.get("tipo_usuario");
    if (tipo_user === "teacher"){
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to='/PortalProfesor' className="navbar-brand">
                            E-Learn
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className= "nav-item">
                                    <Link className='nav-link' to='/Perfil'>Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/foro">Forum</Link>
                                </li>
                            </ul>
                        </div>
                            <Link to='/'>
                                <button className='btn btn-danger' onClick={cerrarSesion}>Sign Out <AiOutlineLogout/> </button>
                            </Link>
                    </div>
                </nav>
            </div>
        )}else if (tipo_user === "student"){
            
            return (
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to='/PortalAlumno' className="navbar-brand">
                            E-Learn
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className= "nav-item">
                                    <Link className='nav-link' to='/Perfil'>Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/foro">Forum</Link>
                                </li>
                            </ul>
                        </div>
                            <Link to='/'>
                                <button className='btn btn-danger' onClick={cerrarSesion}>Sign Out <AiOutlineLogout/> </button>
                            </Link>
                    </div>
                </nav>
            </div>
            )
        }else {
            return (
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link to='/PortalAdministrador' className="navbar-brand">
                                E-Learn
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className= "nav-item">
                                        <Link className='nav-link' to='/Perfil'>Profile</Link>
                                    </li>
                                </ul>
                            </div>
                                <Link to='/'>
                                    <button className='btn btn-danger' onClick={cerrarSesion}>Sign Out <AiOutlineLogout/> </button>
                                </Link>
                        </div>
                    </nav>
                </div>
            )
        }
}
export default Navbar