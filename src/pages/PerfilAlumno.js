import React from 'react';
import Navbar from '../components/Navbar.js';
import Axios from "axios";
import Cookies from "universal-cookie";

const Perfil = () => {
    const cookies = new Cookies();

    const[formData, setFormData] = React.useState({
          username: "",
          password: "",
          email:"",
          telefono:"",
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
    
        Axios.post("http://localhost:4000/visitante/iniciarSesion",{
          email: formData.email,
          password: formData.password
        }).then(function (response) {
          if(response.statusText === "OK"){
            // Guardar datos del usuario en cookies
            const cookies = new Cookies();
            cookies.set('ap_mat', response.data.AP_MAT, {path: '/'});
            cookies.set('ap_pat',response.data.AP_PAT,{path:'/'});
            cookies.set('doc_id', response.data.DOC_ID, {path: '/'});
            cookies.set('e_mail', response.data.E_MAIL, {path: '/'});
            cookies.set('fecha_creacion', response.data.FECHA_CREACION, {path: '/'});
            cookies.set('fecha_nac', response.data.FECHA_NAC, {path: '/'});
            cookies.set('id_usuario', response.data.ID_USUARIO, {path: '/'});
            cookies.set('nom_usuario', response.data.username===null?"":response.data.NOM_USUARIO, {path: '/'});
            cookies.set('numero_celular',response.data.NUMERO_CELULAR,{path:'/'});
            cookies.set('password',response.data.PASSWORD,{path:'/'});
            cookies.set('primer_nom',response.data.PRIMER_NOM,{path:'/'});
            cookies.set('tipo_usuario',response.data.TIPO_USUARIO,{path:'/'});
            window.location.href="./portal";
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(formData);
      }


    return (
        <div class="d-flex justify-content-center">
          <div className="w-75 p-3">
            <Navbar/>
            <div className="row my-4">
              <div className="col-md-8 offset-md-2">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                     type="button" role="tab" aria-controls="home" aria-selected="true">Datos del Usuario</button>
                  </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                     type="button" role="tab" aria-controls="profile" aria-selected="false">Actualizar Datos</button>
                </li>
                </ul>
                        <div className="tab-content" id="myTabContent">
                          <br/>
                              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                  <div className="row">
                                      <div className="col-4">
                                          <img className="img-thumbnail" src="https://img.freepik.com/vector-gratis/colegial-pie-sobre-libros-levantando-mano-hablando-ilustracion-vector-plano-informe-tarea-casa-lectura-alumno-escuela-educacion-conocimiento_74855-8576.jpg" alt=""/>
                                      </div>
                                      <div className="col-8">
                                          <div className="form-group row mb-2">
                                              <label for="codigo" className="col-4">Primer Nombre</label>
                                              <div className="col-8">
                                                  <input type="text" className="form-control" value={cookies.get('primer_nom')} readOnly/>
                                              </div>                                            </div>
                                           <div className="form-group row mb-2">
                                              <label for="codigo" className="col-4">Apellido Paterno</label>
                                              <div className="col-8">
                                                  <input type="text" className="form-control" value={cookies.get('ap_pat')} readOnly/>
                                              </div>
                                          </div>
                                          <div className="form-group row mb-2">
                                              <label for="codigo" className="col-4">Apellido Materno</label>
                                              <div className="col-8">
                                                  <input type="text" className="form-control" value={cookies.get('ap_mat')} onChange={handleChangeInput} readOnly/>
                                              </div>
                                          </div>
                                          <div className="form-group row mb-2">
                                              <label for="codigo" className="col-4">Nombre de Usuario</label>
                                              <div className="col-8">
                                                  <input type="text" className="form-control" value={cookies.get('nom_usuario')} onChange={handleChangeInput} readOnly/>
                                              </div>
                                          </div>
                                          <div className="form-group row mb-2">
                                              <label for="codigo" className="col-4">E-Mail</label>
                                              <div className="col-8">
                                                  <input type="email" className="form-control" value={cookies.get('e_mail')} onChange={handleChangeInput} readOnly/>                                                </div>
                                            </div>
                                            <div className="form-group row mb-2">
                                               <label for="codigo" className="col-4">Número de Teléfono</label>
                                              <div className="col-8">
                                                 <input type="number" className="form-control" value={cookies.get('numero_celular')} onChange={handleChangeInput} readOnly/>
                                              </div>
                                           </div>
                                            <div className="form-group row">
                                                <label for="codigo" className="col-4">DNI</label>
                                                <div className="col-8">
                                                    <input type="text" className="form-control" value={cookies.get('doc_id')} onChange={handleChangeInput} readOnly/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="col-md-10 offset-md-1 ">
                                        <h3 className="text-center">Modificación de los Datos</h3>
                                        <form form onSubmit={handleSubmit} method="post">
                                        <div className="form-group row mb-2">
                                            <label for="Usuario" className="col-4">Nombre de Usuario</label>
                                            <div className="col-8">
                                                <input type="text" name='username' className="form-control" value={cookies.get('nom_usuario')}/>
                                            </div>
                                        </div>
                                        <div className="form-group row  mb-2">
                                            <label for="Usuario" className="col-4">Contraseña</label>
                                            <div className="col-8">
                                                <input type="text" name='password' className="form-control" value={cookies.get('password')}/>
                                            </div>
                                        </div>
                                        <div className="form-group row  mb-2">
                                            <label for="Usuario" className="col-4">E-Mail</label>
                                            <div className="col-8">
                                                <input type="text" name='email' className="form-control" value={cookies.get('e_mail')}/>
                                            </div>
                                        </div>
                                        <div className="form-group row  mb-2">
                                            <label for="Usuario" className="col-4">Número de Teléfono</label>
                                            <div className="col-8">
                                                <input type="text" name='telefono' className="form-control" value={cookies.get('numero_celular')}/>
                                            </div>
                                        </div>
                                        <br/>
                                            <div className="form-group text-center">
                                                <button form onSubmit={handleSubmit} method="post" type='submit' className="btn btn-info">Actualizar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
export default Perfil