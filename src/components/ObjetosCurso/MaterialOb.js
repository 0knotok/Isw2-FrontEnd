import CursoOb from './CursoOb'

class Material{
    constructor(id_material,id_curso,link){
        this.id_material = id_material;
        this.id_curso = new CursoOb();
        this.link = link;
    }

    set setid_material(id_material){
        this.id_material = id_material;
    }
    set setid_curso(id_curso){
        this.id_curso = id_curso;
    }
    set setlink(link){
        this.link = link ;
    }

    get getid_material(){
        return this.id_material;
    }
    get getid_curso(){
        return this.id_curso;
    }
    get getlink(){
        return this.link;
    }

    subirMaterial(){
        return(
            <div className='container'>
                <div>
                  <h2>Insert Material</h2>
                </div>
               
                <div>
                  <p>Choose Course</p>
                  
                  <select className="form-control me-2" name="especialidad" id="especialidad" aria-label="selectEsp" onChange={(e)=>{
                        setEsp(e.target.value);
                      }} required>
                      <option defaultValue="0"></option>
                      {especialidad.map(especialidad => <option key={especialidad.ID_CURSO} value={especialidad.ID_CURSO}>{especialidad.NOMBRE}</option>)}
                  </select>
                </div>
                <div>
                  <input type="file" name="uploadFile" onChange={(e)=>handleChangeInput(e)} />
                </div>
                <div>
                  <button type="submit" name="submitFile" onClick={(e)=>submitFile(e)} className="btn btn-primary ml-2 align-items-center">Submit</button>
                </div>
               
            </div>
        )
    }

    mostrarMaterial(){
        return (
            <div class="d-flex justify-content-center">
              <div className="w-75 p-3">
                <div className="row">
                  <Navbar />
                </div>
                <div className="row">
                  <div className="col-3 ms-4 mt-5">
                    <div className="p-5 container-fluid border border-secondary">
                      {get_nombre_curso}
                    </div>
                    <div className="row text-white">
                      hola
                    </div>
                    <div className="p-5 container-fluid border border-secondary">
                      <div className="row">
                        <div className="col">
                          Evaluation
                        </div>
                        <div className="col">
                          <Link to='/FormularioEvaluacion'>
                            <button type="button" className="btn btn-success">Go to test</button>
                          </Link>
                        </div>
                      </div>
                    </div>
        
                  </div>
                  <div className="col">
                    <h1>Document for {get_nombre_curso}:</h1>
                    <iframe height="170%" width="100%" src={'data:application/pdf;base64,' + material.MATERIAL}>
                    </iframe>
                    <div className="row">
                      <Link to='/PortalAlumno'>
                        <button type="button" className="btn btn-danger">Return</button>
                      </Link>
                    </div>
                  </div>
                </div>
        
              </div>
            </div>
          )
    }
}

export {Material};