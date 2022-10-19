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




    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to='/portal' className="navbar-brand">
                        E-Learn
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class= "nav-item">
                                <Link className='nav-link' to='/perfil'>Profile</Link>
                            </li>
                            <li class="nav-item">
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
}
export default Navbar