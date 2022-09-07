import { Link } from 'react-router-dom';  
const Navbar = () => {
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
                            <li class="nav-item">
<<<<<<< HEAD
                                <a class="nav-link" href="#">Módulos</a>
                            </li>
                            <li class="nav-item">
                                <Link to='/foro'>
                                    <a class="nav-link" href="#">Foro</a>
                                </Link>
=======
                                <Link className="nav-link" to="/foro">Foro</Link>
>>>>>>> 401cecd963765652c68f7f77bce2dbf1c01ea255
                            </li>
                        </ul>
                    </div>
                        <Link to='/'>
                            <button className='btn btn-danger'>Sign Out</button>
                        </Link>
                </div>
            </nav>
        </div>
    )
}
export default Navbar