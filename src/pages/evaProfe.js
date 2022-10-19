import React from 'react'
import Navbar from '../components/Navbar.js';

export default function EvaProfe() {
    return (
        
  <div class="d-flex justify-content-center">
  <section className="w-75 p-3 ">
  <Navbar/>
    <div className="col-md-6 mt-4">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center">Formulario de evaluacion de profesor</h3>
          <form className="mt-4">
            <div className="row my-3">
              <div className="col my-1">
                  <label htmlFor='nombres'>Nombres:</label>
              </div>
                 <div className="col my-1">
                     <input type="text" className="form-control" id='nombres' />
                 </div>
            </div>
            <div className="row my-3">
                <div className="col my-1">
                  <label htmlFor="apellidos">Apellidos:</label>
                </div>
                <div className="col my-1">
                    <input type="text" className="form-control" id='apellidos' />
                 </div>
             </div>
                    <div className="row my-3">
                        <div className="col my-1">
                                <label htmlFor="profesor">Profesor:</label>
                        </div>
                        <div className="col my-1">
                                <div>
                                    <input type="radio" name='profesor' id='profesor1' />
                                     <label for="profesor">123</label>
                                </div>
                                <div>
                                    <input type="radio" name='profesor' id='profesor2' />
                                    <label for="profesor">zzz</label>
                                </div>
                                <div>
                                    <input type="radio" name='profesor' id='profesor3' />
                                    <label for="profesor">asdasd</label>
                                </div>
                                <div> 
                                    <input type="radio" name='profesor' id='profesor4' />
                                    <label for="profesor">dfgaf</label>
                                </div>
                        </div>
                    </div>
                        <div className="row my-3">
                        <div className="col my-1">
                                <label htmlFor="profesor">Calificacion:</label>
                        </div>
                        <div className="col my-1">
                                <div>
                                    <input type="radio" name='calificacion' id='star1' />
                                     <label for="profesor">*</label>
                                </div>
                                <div>
                                    <input type="radio" name='calificacion' id='star2' />
                                    <label for="profesor">***</label>
                                </div>
                                <div>
                                    <input type="radio" name='calificacion' id='star3' />
                                    <label for="profesor">***</label>
                                </div>
                                <div>
                                    <input type="radio" name='calificacion' id='star4' />
                                    <label for="profesor">****</label>
                                </div>
                                <div>
                                    <input type="radio" name='calificacion' id='star5' />
                                    <label for="profesor">*****</label>
                                </div>
                            </div>
                        </div>
                            <div className="row my-3">
                                <div className="col my-1">
                                <label htmlFor='nombres'>Comentario adicional:</label>
                        </div>
                        <div className="col my-1">
                            <input type="text" className="form-control" id='comentario' />
                        </div>
                            </div>
                    
                </form>
                <div className="col">
                    <div className="d-grid gap-2 d-md-block">
                        <button
                            className="btn btn-primary lg"
                            type="button"> 
                            Enviar
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  </div>
    )
  }
  