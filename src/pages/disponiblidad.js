import React from 'react'
import Navbar from '../components/Navbar.js'

export default function Disponibilidad(){
    return(
      <div class="d-flex justify-content-center">
    <div class='w-75 p-3'>
    <Navbar/>
    
        <div class="row mt-5">
            <div class="col-md-8 offset-md-2">
                <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="reuniones-tab" data-bs-toggle="tab" data-bs-target="#reuniones"
                            type="button" role="tab" aria-controls="reuniones" aria-selected="true">Reuniones en curso</button>
                    </li>

                    <li class="nav-item mb-1" role="presentation">
                        <button class="nav-link" id="profesores-tab" data-bs-toggle="tab" data-bs-target="#profesores"
                            type="button" role="tab" aria-controls="profesores" aria-selected="false">Profesores Disponibles</button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="grabaciones-tab" data-bs-toggle="tab" data-bs-target="#grabaciones"
                            type="button" role="tab" aria-controls="grabaciones" aria-selected="false">Grabaciones</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="reuniones" role="tabpanel" aria-labelledby="reuniones-tab">
                        <div class="row">
                            <div class="col-8">

                                <div class="form-group row">
                                    <label for="codigo" class="col-5 mb-3"><b>Hora de inicio:</b></label>
                                    <div class="col-4">
                                        <div> En curso</div>
                                    </div>
                                    <p></p>
                                </div>
                                <div class="form-group row">
                                    <label for="codigo" class="col-5 mb-3"><b>Tema de la reunión:</b></label>
                                    <div class="col-4">
                                        <div> Present Perfect</div>
                                    </div>
                                </div>
                                <p></p>
                                <div class="form-group row">
                                    <label for="codigo" class="col-5 mb-3"><b>Id de la reunión:</b></label>
                                    <div class="col-4">
                                        <div>19198197</div>
                                    </div>
                                <p></p>
                                <div class="form-group row">
                                    <label for="codigo" class="col-5"><b>Ingreso a la reunión:</b></label>
                                    <div class="col-4">
                                        <button type="button" class="btn btn-primary btn-sm">Join</button>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    </div>
                    <div class="tab-pane fade" id="profesores" role="tabpanel" aria-labelledby="profesores-tab">
                        <div>
                            <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">Curso a cargo</th>
                                  </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Reading</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>Use of English</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>Smith</td>
                                    <td>Listening</td>
                                  </tr>
                                </tbody>
                              </table>  
                        </div>
                    </div>
                    <div class="tab-pane fade" id="grabaciones" role="tabpanel" aria-labelledby="grabaciones-tab">
                        <div>
                            <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Temas</th>
                                <th scope="col">Link de grabación</th>
                              </tr>
                            </thead>
                            <tbody class="table-group-divider">
                              <tr>
                                <th scope="row">1</th>
                                <td>20/08/2022</td>
                                <td>Use of English</td>
                                <td> <a href="https://www.youtube.com/">Clase 20/08/2022</a> </td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>25/08/2022</td>
                                <td>Reading</td>
                                <td><a href="https://www.youtube.com/">Clase 25/08/2022</a></td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>02/09/2022</td>
                                <td>Listening</td>
                                <td><a href="https://www.youtube.com/">Clase 02/09/2022</a></td>
                              </tr>
                            </tbody>
                          </table>


                        </div>
                    </div>                   
                </div>
            </div>
        </div>
</div>
</div>
)}